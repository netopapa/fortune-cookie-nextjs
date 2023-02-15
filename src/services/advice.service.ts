import { Advice } from "#/model/advice.model";

const ADVICE_API_HOST = "https://api.adviceslip.com";

export const AdviceService = {
  getAdvice: async (): Promise<Advice> => {
    const res = await fetch(`${ADVICE_API_HOST}/advice`);
    return await res.json();
  },
};
