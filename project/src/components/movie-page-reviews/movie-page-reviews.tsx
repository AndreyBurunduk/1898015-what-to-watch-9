import { Review } from '../../types/reiew';
import ReviewItem from './review-item/review-item';

type ReviewsProps = {
  reviews: Review[];
};

function MoviePageReviews({ reviews }: ReviewsProps): JSX.Element {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map((review) => (<ReviewItem review={review} key={review.id}/>))}
      </div>
    </div>


  );
}

export default MoviePageReviews;
