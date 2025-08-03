import FunctionalPieChart from "./FunctionalPieChart";
import MapFunctionalAnalysis from "./MapFunctionalAnalysis";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import Details from "../components/config/details.json";

export default function FunctionalAnalysis() {
  return (
    <motion.div
      className="grid w-full lg:grid-cols-5  lg:mb-5 lg:gap-3"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* ستون 1: متن و نمودار */}
      <div className="lg:col-span-3 col-span-3  border bg-white/40 backdrop-blur-md  rounded-2xl shadow-sm p-5  mt-3 text-xl w-full">
        <h3 className="text-3xl sm:text-2xl   w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug ">
          محله‌ای با هسته‌ای مسکونی که دورتادور آن را ردیفی از مغازه‌ها در
          امتداد معابر پرتردد شهر احاطه کرده‌اند ؛
          <span>
            <Layers size={28} />
          </span>
        </h3>
        <p className="md:leading-loose  whitespace-pre-line lg:leading-loose font-modam  text-justify text-base  ">
          همجواری با راسته‌های تجاری اصلی شهر و حضور گسترده کاربری‌های تجاری و
          مختلط (تجاری–مسکونی) در معابر اصلی و کوچه‌های داخلی، پویایی و رفت‌وآمد
          روزانه را به محله بخشیده و نشان‌دهنده نقش تجاری مهم محله و نزدیکی آن
          به مرکز شهر است.
          <br /> <span className="w-5"></span>
          <strong>
            " هم‌جواری با راسته‌های تجاری، محله ۱۷ شهریور را به یکی از کانون‌های
            فعالیت اقتصادی در شهر تبدیل کرده است. "
          </strong>
          <br />
          <strong className="text-green-900"> وجود مراکز آموزشی</strong>،{" "}
          <strong className="text-green-700">مسجدالنبی</strong>، حسینیه‌های
          متعدد، پارک در محله و نزدیکی به پارک‌های اطراف، نقش مؤثری در ارتقای
          کیفیت زندگی ساکنان دارد. هرچند
          <strong className="text-red-700">
            {" "}
            برخی کاربری‌های شاخص مانند مراکز درمانی در محله دیده نمی‌شود
          </strong>
          ، اما موقعیت مناسب و دسترسی آسان به خیابان‌های اصلی، بسیاری از نیازهای
          خدماتی را جبران کرده است.
        </p>
        {/* باکس ۳: نکته کلیدی */}
        <div className="bg-white/40  border-r-4 border-blue-500 shadow-md p-1 mt-3">
          <h4 className="flex gap-2 text-blue-600">
            {/* <FaLightbulb size={22} className="text-blue-600" /> */}
            <span className="font-bold text-base">🔍 نکته کلیدی:</span>
          </h4>
          <p className="font-modam text-[15px] leading-loose text-gray-800  ">
            قرارگیری همزمان <strong> کلانتری ۱۱ </strong>و <strong>ایستگاه آتش‌نشانی</strong> در دل محله، امنیت و
            امداد را درون محله تضمین کرده و آن را از بسیاری از محله‌های دیگر
            متمایز می‌سازد.
          </p>
        </div>
      </div>
      <div className="col-span-3 lg:col-span-2 mb-3 lg:mb-0 border bg-white/40 backdrop-blur-md mt-3 rounded-2xl shadow-sm pl-5 pr-5 pt-5   text-xl w-full">
        <FunctionalPieChart />
      </div>

      {/* ستون 2 و 3: نقشه */}
      <motion.div
        className="col-span-5 shadow-md rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <MapFunctionalAnalysis />
      </motion.div>
    </motion.div>
  );
}
