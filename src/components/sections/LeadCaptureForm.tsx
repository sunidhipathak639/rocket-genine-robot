"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lock } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  course: z.string().min(1, { message: "Please select a course." }),
});

export function LeadCaptureForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      course: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      form.reset();

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  }

  return (
    <section className="py-24 relative overflow-hidden bg-[#030712]">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-purple-500/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCBMIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPg==')] opacity-20" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-black tracking-widest uppercase"
              >
                Enrollment Open
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
                Ready to{" "}
                <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Accelerate
                </span>{" "}
                Your Career?
              </h2>
              <p className="text-lg text-blue-100/40 font-medium text-balance">
                Join the next cohort of AI leaders. Book a free 1-on-1
                counseling session with our academic advisors to find the
                perfect track for your goals.
              </p>
            </div>

            <ul className="space-y-6">
              {[
                "Discuss your career trajectory and expectations.",
                "Get a roadmap customized to your technical background.",
                "Learn about placement guarantees and financing options.",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 p-[1px] shadow-lg shadow-purple-500/10 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-[11px] bg-[#030712] flex items-center justify-center text-white text-sm font-black">
                      {i + 1}
                    </div>
                  </div>
                  <span className="text-blue-100/60 font-medium group-hover:text-white transition-colors duration-300">
                    {text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Form Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-500 rounded-[33px] blur opacity-20 group-hover:opacity-40 transition duration-500" />

            <Card className="relative border-white/10 shadow-2xl bg-white/[0.02] backdrop-blur-2xl rounded-[32px] overflow-hidden">
              <CardHeader className="pb-6 space-y-1">
                <CardTitle className="text-2xl font-black text-white tracking-tight">
                  Book Your Free Session
                </CardTitle>
                <CardDescription className="text-blue-100/40 font-medium">
                  Limited seats available for the upcoming cohort.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-blue-100/60">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="bg-white/5 border-white/10 h-12 rounded-xl text-white placeholder:text-blue-100/20 focus:border-purple-500/50 focus:ring-purple-500/20 transition-all"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400 text-xs font-bold" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-blue-100/60">
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+91 98765 43210"
                              className="bg-white/5 border-white/10 h-12 rounded-xl text-white placeholder:text-blue-100/20 focus:border-blue-500/50 focus:ring-blue-500/20 transition-all"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-rose-400 text-xs font-bold" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="course"
                      render={({ field }) => (
                        <FormItem className="space-y-2">
                          <FormLabel className="text-xs font-black uppercase tracking-widest text-blue-100/60">
                            Program of Interest
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="bg-white/5 border-white/10 h-12 rounded-xl text-white focus:border-cyan-500/50 focus:ring-cyan-500/20 transition-all">
                                <SelectValue placeholder="Select a program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-[#030712] border-white/10 text-white rounded-xl">
                              <SelectItem value="ai-foundations">
                                AI Foundations
                              </SelectItem>
                              <SelectItem value="ml-engineering">
                                Machine Learning Engineering
                              </SelectItem>
                              <SelectItem value="generative-ai">
                                Generative AI Mastery
                              </SelectItem>
                              <SelectItem value="data-science">
                                Data Science AI Spec.
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage className="text-rose-400 text-xs font-bold" />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 text-sm font-black uppercase tracking-widest rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-blue-500/20 border-0"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Processing...
                          </span>
                        ) : isSuccess ? (
                          "Request Sent!"
                        ) : (
                          "Book Free Session"
                        )}
                      </Button>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-2 text-[10px] font-black text-blue-100/20 uppercase tracking-widest">
                      <Lock className="w-3 h-3" />
                      <span>SECURE & CONFIDENTIAL ENROLLMENT</span>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
