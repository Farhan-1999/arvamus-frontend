import React from "react";
import { useState,useEffect } from "react";
import "./GivenFeedbacks.css";
import { MyReviewCard } from "../../components/ReviewCard/MyReviewCard";
import { ReviewDetailsPopUP } from "../../components/PopUps/ReviewDetailsPopUP";
import Sidebar from "../../General/Sidebar/Sidebar";
import { EditRatingPopUP } from "../../components/PopUps/EditRatingPopUP";
import { EditReviewPopUP } from "../../components/PopUps/EditReviewPopUP";
import {getReviewAndRatingByReviewer} from "../../Services/reviewService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateRating } from "../../Services/ratingService";
import { updateReview } from "../../Services/reviewService";



const GivenFeedbacks = () => {
 

  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);
  const [currentReviewLoaded, setCurrentReviewLoaded] = useState({});

  const [mainPopupState, setMainPopupState] = useState(false);
  const [RatingPopupState, setRatingPopupState] = useState(false);
  const [ReviewPopupState, setReviewPopupState] = useState(false);
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
    async function fetchRatingByReviewer() {
      const userId = localStorage.getItem("userId");
      const privateKey = localStorage.getItem("privateKey");
      const body = JSON.stringify({
        reviewerId: userId,
        privatekey: privateKey,
      });

      getReviewAndRatingByReviewer(body).then((data) => {
        console.log(data)
        if (data.status === false) {
          return;
        } else {
          setReviewsAndRatings(data.response);
        }
      });
    }
    fetchRatingByReviewer();
  }, []);

  const onDetailsButtonClickFromMainPopUp = (review) => {
    setCurrentReviewLoaded(review);
    setMainPopupState(true);
  };
  const onClickMainPopUpCloseButton = () => {
    setMainPopupState(false);
  };

  const onReviewEditButtonClickFromMainPopUp = (currentReviewLoaded) => {
    setReviewPopupState(true);
    setMainPopupState(false);
  };

  const onRatingEditButtonClickFromMainPopUp = () => {
    setMainPopupState(false);
    setRatingPopupState(true);
  };

  const onEditRatingPopupCloseButtonClick = () => {
    setRatingPopupState(false);
    setMainPopupState(true);
  };

  const onEditReviewPopupCloseButtonClick = () => {
    setReviewPopupState(false);
    setMainPopupState(true);
  };
  const onEditReviewPopUpUpdateButtonClick = async ({ review ,reviewId,sharedKey, toggleSetting }) => {
    let zeroOrOne = "0";
    if(toggleSetting){
      zeroOrOne = "1";
    }


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
        for (let i = 0; i < reviewsAndRatings.length; i++) {
          if (reviewsAndRatings[i].reviewid === reviewId) {
            reviewsAndRatings[i].reviewtext = review;
            break;
          }
        }

        new Promise(resolve => setTimeout(resolve, 3000)).then(() => window.location.reload());
        return;
   
  };


  const  onEditRatingPopUpUpdateButtonClick= async ({ detailsRating, ratingId }) => {
    // setRatingPopupState(false);
    

    
    
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
        setMainPopupState(true);
        return;
    
   
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
          onButtonClick={onEditRatingPopupCloseButtonClick}
          onUpdateButtonClick={onEditRatingPopUpUpdateButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      {ReviewPopupState && (
        <EditReviewPopUP
          onButtonClick={onEditReviewPopupCloseButtonClick}
          onUpdateButtonClick={onEditReviewPopUpUpdateButtonClick}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      {mainPopupState && (
        <ReviewDetailsPopUP
          isEditable={true}
          onReviewEdit={() =>onReviewEditButtonClickFromMainPopUp(currentReviewLoaded)}
          onRatingEdit={onRatingEditButtonClickFromMainPopUp}
          onButtonClick={onClickMainPopUpCloseButton}
          currentReviewLoaded={currentReviewLoaded}
        />
      )}
      <div className="review-feedback-main">
        <div className="card">
          <div className="reviews-list">
            {reviewsAndRatings.map((review) => {
              return (
                <MyReviewCard
                  key={review.id}
                  information={review}
                  onButtonClick={() =>
                    onDetailsButtonClickFromMainPopUp(review)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default GivenFeedbacks;
