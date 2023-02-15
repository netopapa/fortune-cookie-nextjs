import AdviceView from "#/components/AdviceView";
import { Advice } from "#/model/advice.model";

export default async function Home() {
  const response = await fetch(`http://api.adviceslip.com/advice`, {
    next: { revalidate: 60 * 60 * 24 },
  });
  const advice: Advice = await response.json();

  return <AdviceView adviceText={advice.slip.advice} />;
}
