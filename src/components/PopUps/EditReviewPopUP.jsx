import React, { useState } from "react";
import "./EditReviewPopUP.css";

export function EditReviewPopUP(props) {
  const [review, setReview] = useState();
  const [submitOrUpdate, setSubmitOrUpdate] = useState("Submit");
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [sharedKey, setSharedKey] = useState();
  const [reviewId, setReviewId] = useState();
  const [toggleSetting, setToggleSetting] = useState(false);

  const {
    currentReviewLoaded = {},
    onButtonClick = () => {},
    onUpdateButtonClick = () => {},
  } = props;
  const isSubmit = !currentReviewLoaded.isReview;

  if (currentReviewLoaded.isReview !== false) {
    if (isDataLoaded === false) {
      setReview(currentReviewLoaded.reviewResponse.reviewtext);
      setSharedKey(currentReviewLoaded.reviewResponse.sharedkey);
      setReviewId(currentReviewLoaded.reviewResponse.reviewid);
      setSubmitOrUpdate("Update");
      setIsDataLoaded(true);
    }
  }
  const handleToggleSwitch = () => {
    setToggleSetting(!toggleSetting);
  };

  const name =
    currentReviewLoaded.firstname + " " + currentReviewLoaded.lastname;
  const designation =
    currentReviewLoaded.designation + "," + currentReviewLoaded.department;
  const email = currentReviewLoaded.email;

  return (
    <>
      <div className="edit-review-popIn-overlay" onClick={onButtonClick}></div>
      <div className="edit-review-popIn">
        <button
          type="close"
          aria-label="close Button"
          className="close-btn"
          onClick={onButtonClick}
        >
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
        <div className="details-review">
          <div className="main-information">
            <div className="initials">A</div>
            <p className="info">
              <span className="name">{name}</span>
              <span className="designation">{designation}</span>
            </p>
          </div>
          <div className="details-review-main-wrapper">
            <div className="review-description-title-wrapper">
              <div className="signup-row">
                <div>
                  <h3 className="details-review-heading">
                    {submitOrUpdate} Review
                  </h3>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h5 className="details-review-heading">Anonymous</h5>
                  <button
                    className={`toggle-button-anon ${
                      toggleSetting ? "active" : ""
                    }`}
                    onClick={handleToggleSwitch}
                  >
                    {toggleSetting ? "On" : "Off"}
                  </button>
                </div>
              </div>
            </div>
            <div className="details-review-wrapper">
              <textarea
                className="details-review-textarea"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
            </div>
            <button
              className="share-group"
              type="submit"
              area-aria-label="submit"
              onClick={() =>
                onUpdateButtonClick({
                  review,
                  email,
                  reviewId,
                  sharedKey,
                  toggleSetting,
                  isSubmit,
                })
              }
            >
              <span>{submitOrUpdate}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
