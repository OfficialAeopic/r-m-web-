/**
 * Shared testimonial bank — used by homepage Testimonials, Reviews page, and
 * individual service-area pages (which rotate via `testimonialIndex`).
 * Each entry carries the FTC-required "Results may vary" disclaimer.
 */
export const TESTIMONIALS = [
  {
    name: "Meagan Milton",
    quote:
      "I can honestly say I have never experienced customer service quite like this. Every time I had a question or felt unsure, they were just a phone call or quick email away. Always kind, patient, and ready to help in any way they could. I truly felt supported every step of the way.",
  },
  {
    name: "Ralph McKinnon",
    quote:
      "I am not easily impressed, but Joshua and his team truly exceeded all my expectations. Their service is top-notch, something you just do not come across every day. They went above and beyond, and I am honestly so grateful for the experience.",
  },
  {
    name: "Diane Clark",
    quote:
      "I will admit, I was a little nervous at first because I had no clue how it all worked and was feeling totally lost. But Joshua was there every step of the way, walking me through everything with so much patience and clarity. I honestly could not have done it without him.",
  },
] as const;

export const FTC_DISCLAIMER =
  "Results may vary. Individual tax situations differ.";
