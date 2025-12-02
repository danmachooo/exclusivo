/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import * as React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format, setHours, setMinutes, parse } from "date-fns";
import { ChevronDown } from "lucide-react";

interface TimePickerProps {
  value: Date | string | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
}

export function TimePicker({
  value,
  onChange,
  placeholder = "Select time",
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false);
  const [hour, setHour] = React.useState("");
  const [minute, setMinute] = React.useState("");
  const [ampm, setAmpm] = React.useState<"AM" | "PM">("AM");

  React.useEffect(() => {
    if (value) {
      const h = format(value, "hh");
      const m = format(value, "mm");
      const ap = format(value, "aa") as "AM" | "PM";

      setHour(h);
      setMinute(m);
      setAmpm(ap);
    }
  }, [value]);

  const updateTime = (h: string, m: string, ap: "AM" | "PM") => {
    if (!h || !m) return;

    const parsed = parse(`${h}:${m} ${ap}`, "hh:mm aa", new Date());
    if (!isNaN(parsed.getTime())) {
      onChange(parsed);
    }
  };

  const handleHour = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 2);
    if (Number(v) > 12) v = "12";
    if (Number(v) === 0) v = "12";
    setHour(v);
    updateTime(v, minute, ampm);
  };

  const handleMinute = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "").slice(0, 2);
    if (Number(v) > 59) v = "59";
    setMinute(v);
    updateTime(hour, v, ampm);
  };

  const toggleAmPm = () => {
    const newAp = ampm === "AM" ? "PM" : "AM";
    setAmpm(newAp);
    updateTime(hour, minute, newAp);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {value ? format(value, "hh:mm aa") : placeholder}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-48 p-4" align="start">
        <div className="flex items-center gap-2">
          <Input
            value={hour}
            onChange={handleHour}
            placeholder="HH"
            className="w-14 text-center"
            maxLength={2}
          />

          <span className="font-semibold">:</span>

          <Input
            value={minute}
            onChange={handleMinute}
            placeholder="MM"
            className="w-14 text-center"
            maxLength={2}
          />

          <Button variant="outline" onClick={toggleAmPm} className="w-14">
            {ampm}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
