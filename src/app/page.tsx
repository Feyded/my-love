import MessageSection from "./components/message-section";
import MissYouConfirmationSection from "./components/miss-you-confirmation-section";
import MissYouSection from "./components/miss-you-section";

export default function Home() {
  return (
    <>
      <MessageSection />
      <MissYouSection />
      <MissYouConfirmationSection />
    </>
  );
}
