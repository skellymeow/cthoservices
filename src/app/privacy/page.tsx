import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>
        <div className="max-w-xl text-center space-y-4 text-base">
          <p className="text-sm text-neutral-400 mb-2">Last updated: December 2024</p>
          <p>
            We collect your information only to contact you and provide our services. By using this site, you consent to being contacted and offered our services, including a 15–30 minute onboarding call. Your data is never sold or shared except as required to deliver our services or by law.
          </p>
          <p>
            We keep your info secure, use it only for its intended purpose, and don’t play games with your privacy. If you have questions, just ask.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 