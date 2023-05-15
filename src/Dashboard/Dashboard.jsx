import { useState,useEffect } from "react";
import Sidebar from "../General/Sidebar/Sidebar";
import { EditRatingPopUP } from "../components/PopUps/EditRatingPopUP";
import { EditReviewPopUP } from "../components/PopUps/EditReviewPopUP";
import { UserCard } from "../components/ReviewCard/UserCard";
import { getAllTeachers } from "../Services/appService";
import { getReviewByRevieweeEmailAndReviewerId,giveReview,updateReview } from "../Services/reviewService";
import {getRatingByRevieweeEmailAndReviewerId, giveRating ,updateRating} from "../Services/ratingService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {ServerEnum} from "../ServerEnum";

const Dashboard = () => {

  const [currentReviewLoaded, setCurrentReviewLoaded] = useState({});

  const [RatingPopupState, setRatingPopupState] = useState(false);
  const [ReviewPopupState, setReviewPopupState] = useState(false);

  const [teachers, setTeachers] = useState([]);
  const attributessOfToast = {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  useEffect(() => {
    async function fetchTeachers() {
      getAllTeachers().then((data) => {
        if (data.status === false) {
          return;
        } else {
          setTeachers(data.response);
        }
      });
    }
    fetchTeachers();
  }, []);
  
  const onRatingButtonClick = async (data) => {
    const userId = localStorage.getItem("userId");
    const body = JSON.stringify({
      revieweeEmail: data.email,
      reviewerId: userId,
      isReviewer: true,
    });
    await getRatingByRevieweeEmailAndReviewerId(body).then(
      (response) => {

        if (response.status === false) {
          toast("Not Valid", attributessOfToast);
          return;
        } else {

          data.isRating = true;
          data.ratingResponse = response.response[0];

          setCurrentReviewLoaded(data);
          setRatingPopupState(true);
        }
      }).catch (error => {
        if(error === ServerEnum.RESPONSE_NO_RATING_FOUND){
              data.isRating = false;
              setCurrentReviewLoaded(data);
              setRatingPopupState(true);
        }
        else{
          toast(error, attributessOfToast);
        }
      });

    
   
  };

  

  const onReviewButtonClick = async (data) => {
    // get userId from local storage
    const userId = localStorage.getItem("userId");
    const privateKey = localStorage.getItem("privateKey");
    const body = JSON.stringify({
      revieweeEmail: data.email,
      reviewerId: userId,
      privatekey: privateKey,
      isReviewer: true,
    });
    await getReviewByRevieweeEmailAndReviewerId(body).then(
      (response) => {

        if (response.status === false) {
          toast("Not Valid", attributessOfToast);
          return;
        } else {
          data.isReview = true;
          data.reviewResponse = response.response;

          setCurrentReviewLoaded(data);
          setReviewPopupState(true);
        }
      }).catch (error => {
        if(error === ServerEnum.RESPONSE_NO_REVIEW_FOUND){
              data.isReview = false;
              setCurrentReviewLoaded(data);
              setReviewPopupState(true);
        }
        else{
          toast(error, attributessOfToast);
        }
      });




  };

  const onRaringCloseButtonClick = () => {
    setRatingPopupState(false);
  };

  const onReviewCloseButtonClick = () => {
    setReviewPopupState(false);
  };

  const onRatingSubmitButtonClick = async ({ detailsRating, email,ratingId,isSubmit }) => {
    // setRatingPopupState(false);
    
    if(isSubmit){
      const userId = localStorage.getItem("userId");
      const body = JSON.stringify({

        reviewerId: userId,
        revieweeEmail: email,
        responsibility: detailsRating[0].rating,
        behaviour : detailsRating[1].rating,
        professionalism : detailsRating[2].rating,
        proficiency : detailsRating[3].rating,
        management : detailsRating[4].rating,
  
      });
      await giveRating(body).then(
        (response) => {
  
          if (response.status === false) {
            toast("Error", attributessOfToast);
            return;
          } else {
            toast("Submission Successful", attributessOfToast);

          }
        }).catch (error => {
          toast("Error", attributessOfToast);

        });
      
      
        setRatingPopupState(false);
      return;
    }
    
    else{
      const body = JSON.stringify({
        ratingId: ratingId,
        responsibility: detailsRating[0].rating,
        behaviour : detailsRating[1].rating,
        professionalism : detailsRating[2].rating,
        proficiency : detailsRating[3].rating,
        management : detailsRating[4].rating,
      });
      await updateRating(body).then(
        (response) => {
  
          if (response.status === false) {
            toast("Error", attributessOfToast);
            return;
          } else {
            toast("Update Successful", attributessOfToast);

          }
        }).catch (error => {
          toast("Error", attributessOfToast);

        });
        setRatingPopupState(false);
        return;
    }
   
  };

  const onReviewSubmitButtonClick = async ({ review, email ,reviewId,sharedKey, toggleSetting,isSubmit }) => {
    let zeroOrOne = "0";
    if(toggleSetting){
      zeroOrOne = "1";
    }
    console.log(zeroOrOne);
    if(isSubmit){
      const userId = localStorage.getItem("userId");
      const privateKey = localStorage.getItem("privateKey");
      const body = JSON.stringify({

        reviewerId: userId,
        reviewerPrivateKey: privateKey,
        reviewText: review,
        isAnonymous: zeroOrOne,
        revieweeEmail: email,

  
      });
      await giveReview(body).then(
        (response) => {
  
          if (response.status === false) {
            toast("Error", attributessOfToast);
            return;
          } else {
            toast("Submission Successful", attributessOfToast);

          }
        }).catch (error => {
          toast("Error", attributessOfToast);

        });
      
      
      setReviewPopupState(false);
      return;
    }
    
    else{
      const body = JSON.stringify({
        reviewId: reviewId,
        reviewText: review,
        isAnonymous: zeroOrOne,
        sharedKey : sharedKey,
      });
      await updateReview(body).then(
        (response) => {
  
          if (response.status === false) {
            toast("Error", attributessOfToast);
            return;
          } else {
            toast("Update Successful", attributessOfToast);

          }
        }).catch (error => {
          toast("Error", attributessOfToast);

        });
        setReviewPopupState(false);
        return;
    }
  };

  return (
    <Sidebar>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {RatingPopupState && (
        <EditRatingPopUP
          onButtonClick={onRaringCloseButtonClick}
          onUpdateButtonClick={onRatingSubmitButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      {ReviewPopupState && (
        <EditReviewPopUP
          onButtonClick={onReviewCloseButtonClick}
          onUpdateButtonClick={onReviewSubmitButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      <div className="review-feedback-main">
        <div className="card">
          <div className="reviews-list">
            {teachers.map((teacher) => {
              return (
                <UserCard
                  key={teacher.userid}
                  information={teacher}
                  onRatingButtonClick={() => onRatingButtonClick(teacher)}
                  onReviewButtonClick={() => onReviewButtonClick(teacher)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default Dashboard;
