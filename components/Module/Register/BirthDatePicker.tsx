import { FiCalendar } from "react-icons/fi";
import { Controller, Control, FieldErrors } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FormData } from "./RegisterForm";

type Props = {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
};

export default function BirthDatePicker({ control, errors }: Props) {
  return (
    <div className="relative">
      <FiCalendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10" />
      <Controller
        name="date"
        control={control}
        rules={{ required: "تاریخ تولد وارد نشده" }}
        render={({ field }) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { ref, ...rest } = field;
          return (
            <DatePicker
              {...rest}
              calendar={persian}
              locale={persian_fa}
              placeholder="تاریخ تولد"
              inputClass="w-full pr-10 p-2 rounded-lg bg-gray-50 text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              calendarPosition="bottom-right"
            />
          );
        }}
      />
      {errors.date && (
        <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
      )}
    </div>
  );
}
