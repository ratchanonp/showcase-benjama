import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FilterSchema = z.object({
  awardTypes: z.array(z.string()),
});

export default function FilterForm() {
  const awardTypes = [
    { id: "academic", name: "ผลงานวิชาการ" },
    { id: "sport", name: "ผลงานกีฬา" },
  ];

  const form = useForm<z.infer<typeof FilterSchema>>({
    resolver: zodResolver(FilterSchema),
    defaultValues: {
      awardTypes: [],
    },
  });

  const onSubmit = (data: z.infer<typeof FilterSchema>) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="awardTypes"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel className="text-base">ประเภท</FormLabel>
                <FormDescription>เลือกประเภทของผลงาน </FormDescription>
              </div>
              {awardTypes.map((awardType) => (
                <FormField
                  key={awardType.id}
                  control={form.control}
                  name="awardTypes"
                  render={({ field }) => (
                    <FormItem
                      id={awardType.id}
                      className="flex flex-row items-end space-x-3"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value.includes(awardType.id)}
                          onCheckedChange={(checked) => {
                            return checked
                              ? field.onChange([...field.value, awardType.id])
                              : field.onChange(
                                  field.value.filter(
                                    (id) => id !== awardType.id
                                  )
                                );
                          }}
                        />
                      </FormControl>
                      <FormLabel>{awardType.name}</FormLabel>
                    </FormItem>
                  )}
                />
              ))}
            </FormItem>
          )}
        />
        <Button type="submit">ใช้งานตัวกรอง</Button>
      </form>
    </Form>
  );
}
