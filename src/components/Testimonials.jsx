import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

    <div className="w-full flex justify-center  md:items-center items-start md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] md:px-6 p-0">
      <h4 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h4>

      <p className={`${styles.paragraph} md:text-right text-left max-w-[450px] mt-5`}>
        Everything you need ot accept card payment and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flex flex-wrap sm:justify-between justify-start w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
