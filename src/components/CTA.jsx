import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} sm:my-16 my-16 sm:px-16 px-6 sm:py-16 py-6 ${styles.marginX} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[45px] text-[36px] text-white xs:leading-[60px] leading-[50px] w-full">
        Let's try our service now
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Every you need to accept card payments and grow your business anywhere
        on the planet.
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
