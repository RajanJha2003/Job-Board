import React, { useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import { Control, useController } from "react-hook-form";
import { formatCurrency } from "@/app/utils/formatCurrency";

interface iAppProps {
  control: Control<any>;
  minSalary?: number;
  maxSalary?: number;
  step?: number;
  currency?: string;
}

const SalaryRangeSelector = ({
  control,
  maxSalary,
  minSalary,
  step,
  currency,
}: iAppProps) => {
  const { field: fromField } = useController({
    name: "salaryFrom",
    control,
  });

  const { field: toField } = useController({
    name: "salaryTo",
    control,
  });

  if (!maxSalary || !minSalary) return null; // Or show a placeholder

  const [range, setRange] = useState<[number, number]>([
    fromField.value || minSalary,
    toField.value || maxSalary / 2,
  ]);

  const handleRangeChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setRange(newRange);
    fromField.onChange(newRange[0]);
    toField.onChange(newRange[1]);
  };

  // Update range when form values change externally
  useEffect(() => {
    setRange([fromField.value || minSalary, toField.value || maxSalary / 2]);
  }, [fromField.value, toField.value, minSalary, maxSalary]);
  return (
    <div className="w-full space-y-4">
      <Slider
        min={minSalary}
        max={maxSalary}
        step={step}
        value={range}
        onValueChange={handleRangeChange}
        className="py-4"
      />

      <div className="flex justify-between">
        <span className="text-sm text-muted-foreground">
          {formatCurrency(range[0])}
        </span>
        <span className="text-sm text-muted-foreground">
          {formatCurrency(range[1])}
        </span>
      </div>
    </div>
  );
};

export default SalaryRangeSelector;
