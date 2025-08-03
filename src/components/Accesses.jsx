/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import AccsessesArzeMabar from "./AccessesArzeMabar";
import AccsessesKyfiatMabar from "./AccsessesKyfiatMabar";
import MapStreet from "./MapStreet";
import { Map } from "lucide-react";
import { Button } from "./Button";
import Details from "../components/config/details.json";
import { useState } from "react";
import Accordion from "./Accordion";

export default function Accesses() {
  const [selectedComponent, setSelectedComponent] = useState("key");

  return (
    <section className="w-full mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
        {/* باکس توضیحات */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-3 bg-white/50 backdrop-blur-md "
        >
          <h3 className="text-3xl    w-full flex flex-row-reverse aling-centeritems-center text-right justify-end gap-2  font-modam font-extrabold   text-[var(--text)] mb-4 leading-snug">
            17 شهریور شمالی " محله‌ای در مدار تردد "{Details.alley.name}{" "}
            <span>
              <Map size={28} />
            </span>
          </h3>
          <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
            محله ۱۷ شهریور شمالی یکی از نقاط{" "}
            <strong className="text-red">پررفت وآمد </strong>در بافت شهری بجنورد
            است.
            <strong className="text-green-700">
              {" "}
              دسترسی مناسب به شبکه معابر و مجاورت با خیابان‌های اصلی
            </strong>
            ، امکان{" "}
            <strong className="text-green-900">
              اتصال سریع به سایر مناطق شهر
            </strong>{" "}
            را فراهم کرده، اما در مقابل، باعث افزایش حجم عبور و مرور در‌محله‌
            شده است.
            <br />
            <strong className="text-purple-700">
              {" "}
              الگوی نسبتاً متصل معابر و عرض مناسب خیابان‌ها
            </strong>
            ، شرایطی نسبتاً مطلوب برای تردد فراهم کرده‌اند، اما تردد زیاد وسایل
            نقلیه، به‌ویژه در برخی ساعات شلوغ روز، موجب کاهش آرامش در بخش‌هایی
            از محله شده است. با این حال،{" "}
            <strong className="text-blue-900">
              دسترسی به ایستگاه‌های حمل‌ونقل عمومی و امکان پیاده‌روی{" "}
            </strong>
            در بخش زیادی از مسیرها از نقاط قوت این محدوده‌اند که همچنان بر کیفیت
            سکونت تأثیر مثبتی دارند.
          </p>
          <div className=" bg-white/40  border-r-4 border-orange-800 shadow-md mb-1 p-2 ">
            <span className="text-orange-800">
              • میانگین کیفیت معابر: ۳۴ از ۵۰:
            </span>{" "}
            در عددی که نشان‌دهنده وضعیت نسبتاً مناسب است، هرچند در نیمه شمالی
            محله کیفیت پایین‌تر بوده و معابر محلی دارای بنبست های بیشتر و عرض
            کمتر میباشند.
            <p className="md:leading-loose lg:leading-loose font-modam  text-justify text-base  ">
              {" "}
            </p>
          </div>
          <Accordion
            title={
              <span
                className="text-base font-bold bg-text-right"
                style={{ fontFamily: "Modam" }}
              >
                {" "}
                خیابان‌های مهم محله :
              </span>
            }
            content={
              <ul >
                <li>
                  • خیابان ۱۷ شهریور (غرب): محور شمالی‌جنوبی با دسترسی سریع به
                  مرکز شهر و تمرکز بالای کاربری تجاری
                </li>
                <li>
                  • خیابان طالقانی شرقی (جنوب): از اصلی‌ترین و پرترافیک‌ترین
                  معابر شهر با نقش فعال در راسته تجاری
                </li>
                <li>
                  • خیابان شهدا یا ۳۲ متری (شمال): پیونددهنده مهم با محله‌های
                  مجاور و معابر شریانی مناسب برای تردد
                </li>
                <li>
                  • خیابان استقلال (شرق): معبری نسبتاً خلوت و مؤثر برای ورود به
                  محله{" "}
                </li>
                <li className="text-yellow-800 ">🟡معبر کلیدی: خیابان سرداران (ینگه‌قلعه)</li><li>«این خیابان با ایجاد ارتباط میان شمال و جنوب محله، نقشی کلیدی در تسهیل رفت‌وآمد ساکنان ایفا می‌کند.»</li><li className="text-red-700">🔴 گره ترافیکی:  چهارراه ۱۷ شهریور</li>
              <li>یکی از تقاطع‌های مهم محله است که به‌دلیل توقف‌های غیرمجاز و نبود پارکینگ مناسب، با ترافیک سنگین مواجه است؛ با این‌حال، نقشی کلیدی در ارتباط با مرکز شهر دارد.</li></ul>
            }
            defaultOpen={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=" rounded-2xl shadow-sm p-5 border lg:col-span-2 lg:leading-loose bg-white/50 backdrop-blur-md "
        >
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {[
              { label: "عرض معبر", value: "arze" },
              { label: "کیفیت معبر", value: "key" },
            ].map((btn) => (
              <Button
                key={btn.value}
                onClick={() => setSelectedComponent(btn.value)}
                variant={
                  selectedComponent === btn.value ? "default" : "outline"
                }
                className="w-28 text-sm"
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {selectedComponent === "arze" && (
              <motion.div
                key="arze"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesArzeMabar />
              </motion.div>
            )}

            {selectedComponent === "key" && (
              <motion.div
                key="key"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <AccsessesKyfiatMabar />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* نقشه - کل عرض پایین */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 rounded-xl shadow-sm min-h-[600px] lg:h-full"
        >
          <MapStreet />
        </motion.div>
      </div>
    </section>
  );
}
