import SummaryChart from "./SummryChart";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { ClipboardCheck } from "lucide-react";
import Details from "../components/config/details.json";

export default function Summary() {
  return (
    <section className="relative my-3 border bg-white/50 backdrop-blur-sm  rounded-2xl shadow-lg  py-3 sm:p-2 ">
   
      <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2 p-5  font-modam font-extrabold   text-[var(--text)]  leading-snug ">
        ۱۷ شهریور شمالی؛ محله‌ای میان دیروز و فردا
        <ClipboardCheck size={28} />
      </h3>
      <p className="lg:leading-loose  font-modam  text-justify text-base mb-6 pr-5 pl-5 ">
        محله ۱۷ شهریور شمالی، با موقعیت ممتاز در قلب بجنورد، ترکیبی کم‌نظیر از
        سکونت سنتی و تحولات شهری نوین را در دل خود جای داده است. <strong className="text-red-800">امنیت بالا</strong>
        به‌واسطه حضور کلانتری و ایستگاه آتش‌نشانی،<strong className="text-red-800"> تنوع خدمات</strong> آموزشی و تجاری، و<strong className="text-red-800">
        دسترسی سریع به خیابان‌های اصلی</strong> شهر، آن را به یکی از پرتحرک‌ترین و
        پویاترین نواحی شهری تبدیل کرده است.
        <br />
        در کنار این نقاط قوت، چالش‌هایی همچون <strong className="text-green-800">بافت فرسوده</strong>، <strong className="text-green-800">کمبود فضای سبز</strong> و
        <strong className="text-green-800">ترافیک سنگین</strong>، کیفیت زندگی را در برخی بخش‌ها کاهش داده‌اند؛ به‌ویژه در
        نیمه شمالی محله که تفاوت‌های کالبدی و اجتماعی با بخش جنوبی چشمگیرتر است.
        با این حال، وجود پروژه‌های نوسازی، زمین‌های بایر قابل توسعه، و پتانسیل
        بالای بهسازی، چشم‌اندازی روشن برای آینده‌ی این محله ترسیم می‌کند.
      </p>{" "}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className=" col-span-2 md:col-span-1  sm:p-2 p-5"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="col-span-2 md:col-span-1"
      >
        <SummaryChart />
      </motion.div>
    </section>
  );
}
