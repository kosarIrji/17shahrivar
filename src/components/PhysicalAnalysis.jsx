import MapAnalysis from "./MapAnalysis";

import FloorChartSelector from "./FloorChartSelector";
import GhedmatChartSelector from "./GhedmatChartSelector";
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Button } from "./Button";
import { useState } from "react";
import { FaCity, FaChartLine } from "react-icons/fa";
import { Landmark } from "lucide-react";

function PhysicalAnalysis() {
  const [selectedComponent, setSelectedComponent] = useState("ghemat");
  const [chartType, setChartType] = useState("bar");
  return (
    <section className="w-full  ">
      <motion.div
        className=" "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 lg:grid grid-cols-6 lg:gap-4 md:col-span-1 h-full ">
          <div className="border col-span-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg pb-6 sm:px-4 md:px-4 p-5 mt-3 ">
            <h3 className="text-3xl  w-full flex flex-row-reverse items-center text-right justify-end gap-2 font-modam font-extrabold text-[var(--text)] mb-4 leading-snug">
              عبور آرام از سنت به نوسازی
              <span className="">
                {" "}
                <FaCity size={28} />
              </span>
            </h3>
            <div className=" md:leading-loose  whitespace-pre-line lg:leading-loose   text-justify text-base ">
              <p className="font-modam text-base md:leading-loose lg:leading-loos text-gray-800 ">
                محله ۱۷ شهریور شمالی، نمایی از یک بافت قدیمی و کم ارتفاع را به
                تصویر میکشد؛ جایی که{" "}
                <strong className="text-blue-800">
                  اغلب خانه ها همکف یا یک طبقه اند
                </strong>{" "}
                و سبک ساخت وساز سنتی همچنان غالب است. در میان این بافت افقی،
                بناهای بلندتر( ۴ تا ۶ طبقه) در حال فزایش است و عمدتاً در نیمه
                جنوبی محله دیده می شوند که نشان دهنده نوسازی تدریجی در محله است
                .
              </p>
            </div>
            {/* باکس ۲: واقعیت آماری */}
            <div className="bg-white/40 border-r-4 border-[var(--sidebar)] shadow-md mb-2 mt-2 p-2">
              <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800   ">
                <span className="font-bold flex gap-1 text-base text-[var(--sidebar)]">
                  <Landmark size={22} className="text-[var(--sidebar)]" />
                  قدمت :
                </span>
                حدود ۹۰ ساختمان با قدمتی بیش از ۵۰ سال و بیش از ۷۱۰ ملک در بازهی
                ۳۰ تا ۵۰ سال قرار دارند؛ آماری که به روشنی از وسعت
                <strong className="text-purple-700">
                  {" "}
                  فرسودگی در بافت محله
                </strong>{" "}
                خبر میدهد.
                <br />
              </p>
            </div>

            {/* باکس ۳: نکته کلیدی */}
            <div className="bg-white/40  border-r-4 border-green-500 shadow-md mt-2 p-2 ">
              <h4 className="flex gap-2 text-green-600">
                <FaChartLine size={22} className="text-green-600" />
                <span className="font-bold text-base"> واقعیت آماری :</span>
              </h4>
              <p className="font-modam text-base md:leading-loose lg:leading-loose text-gray-800 ">
                وجود<strong> ۴۰ قطعه زمین</strong> بایر با مجموع مساحت بیش از
                ۲۸۲۰۰ متر مربع، در کنار ۹۰ ملک غیرقابل سکونت، فرصتی قابل توجه
                برای سرمایه گذاری و مشارکت در بازآفرینی شهری فراهم کرده است.
                بسیاری از این املاک نیز در موقعیت های مناسب و با دسترسی مطلوب
                قرار دارند.
              </p>
            </div>
            <div className="bg-white/40  border-r-4 border-green-500 shadow-md mt-2 p-2 ">
             
              
              <p className="font-modam text-base md:leading-loose lg:leading-loose  text-gray-800 ">
                <strong className="font-bold text-base text-green-700"> نوسازی:</strong>
                روند نوسازی در محله آغاز شده است؛ وجود ۱۸۰ بنای نوساز و ۴۳ پروژه
                در حال ساخت نشان دهنده ی رشد ساخت وساز در این محله است.
              </p>
            </div>
            {/* باکس ۳: نکته کلیدی */}
            <div className="bg-white/40  border-r-4 border-blue-500 shadow-md p-1 mt-3">
              <h4 className="flex gap-2 text-blue-600">
                {/* <FaLightbulb size={22} className="text-blue-600" /> */}
                <span className="font-bold text-base">
                  🔍 نکته مهم(دوگانگی درون‌محله‌ای):
                </span>
              </h4>
              <p className="font-modam text-[15px] leading-loose text-gray-800  ">
                <strong className="text-blue-600">
                  {" "}
                  تفاوت میان نیمه شمالی و جنوبی
                </strong>{" "}
                از نظر کیفیت معابر، ساخت وساز ودر حالی که
                <strong className="text-blue-700">
                  {" "}
                  نظم قطعه بندی، نوعی دوگانگی کالبدی را شکل داده است
                </strong>
                .
                <strong className="text-orange-700">
                  {" "}
                  نیمه جنوبی کیفیت بالاتری دارد و تحولات ساختمانی در آن پویاتر
                </strong>{" "}
                است .
              </p>
            </div>
          </div>

          <motion.div
            className="flex- flex-col gap-3 border col-span-2  bg-white/50 backdrop-blur-md rounded-2xl shadow-lg mt-3  sm:px-4 md:px-4 "
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* دکمه‌ها و سلکت نوع نمودار */}
            <div className="flex flex-row justify-between gap-2 lg:max-w-[660px] mx-auto  px-4 sm:px-6 md:px-10 mt-5">
              {/* دکمه‌ها - در یک طرف */}
              <div className="flex gap-1 w-full ">
                {[
                  { label: "قدمت", value: "ghemat" },
                  { label: "طبقات", value: "tabaghat" },
                ].map((btn) => (
                  <Button
                    key={btn.value}
                    onClick={() => setSelectedComponent(btn.value)}
                    variant={
                      selectedComponent === btn.value ? "default" : "outline"
                    }
                    className="w-30 text-sm sm:text-base"
                  >
                    {btn.label}
                  </Button>
                ))}
              </div>

              {/* سلکت - در سمت دیگر */}
              <div className="w-full grid  justify-end">
                <select
                  value={chartType}
                  onChange={(e) => setChartType(e.target.value)}
                  className=" h-10 px-1 py-1 rounded-xl   self-end text-base  text-white bg-[var(--accent)] hover:bg-[var(--accent-soft)] transition"
                >
                  <option value="bar">نمودار میله‌ای</option>
                  <option value="line">نمودار خطی</option>
                  <option value="pie">نمودار دایره‌ای</option>
                </select>
              </div>
            </div>

            {/* نمایش نمودار انتخاب‌شده */}
            <div className="w-full lg:max-w-[600px] mx-auto ">
              {selectedComponent === "tabaghat" && (
                <FloorChartSelector chartType={chartType} />
              )}

              {selectedComponent === "ghemat" && (
                <GhedmatChartSelector chartType={chartType} />
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="col-span-1 md:col-span-2 shadow-md mt-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <MapAnalysis />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PhysicalAnalysis;
