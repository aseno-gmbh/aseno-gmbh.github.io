import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

const PrivacyPage = () => {
  return (
    <>
      <section className="overflow-hidden pt-[180px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Privacy Policy
                </h2>
  
                <div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                ASENO cares deeply about the privacy of its visitors and users. To that end, this Privacy Policy (“Privacy Policy”) describes how ASENO Ltd., together with its affiliated companies worldwide , collect, use, and share your Personal Information, as well as an explanation of the data rights you may have in that Personal Information. This Privacy Policy applies to all ASENO users, including unregistered visitors, registered users, and premium users (collectively, “Users”, “you”, or “your”), and to all ASENO services, including our websites, web applications, mobile applications, and related services. This Privacy Policy is not intended to override the terms of any contract you have with us, nor any rights you may have under other applicable data privacy laws.

Prior to accessing or using our Services, please read this policy and make sure you fully understand our practices in relation to your Personal Information.  If you read and fully understand this Privacy Policy, and remain opposed to our practices, you must immediately leave and discontinue all use of any of our Services.  If you have any questions or concerns regarding this policy, please contact us at privacy@aseno.de.
                </p>
                
                <h4 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Personal Information that we collect​
                  </h4>
                  
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  To provide you the best version of our Services, we must collect Personal Information relating to an identified or identifiable natural person (“Personal Information”). We collect Personal Information you provide us, from your use of the Services, and from other sources. Here are the types of Personal Information we collect about you:
Information you provide us. When you register for our Services, purchase and/or, use any of our Services; and/or when you contact us directly by any communication channel, you may provide us Personal Information, such as name, email address, phone number, payment information (for Users with Paid Services), information you include in your communications with us, and Personal Information contained in scanned identification documents (such as an ID card, driver’s license, passport, or official company registration documents).    
Information we collect when you use the Services. When you visit, download, and/or use any of our Services, we may collect aggregated usage Personal Information, such as Visitors’ and Users’ browsing and ‘click-stream’ activity on the Services, non-identifying Personal Information regarding the Visitor’s or User’s device, operating system, internet browser, screen resolution, language and keyboard settings, internet service provider, referring/exit pages, date/time stamps, etc
Information we collect from other sources. We may receive Personal Information about you from third-party sources, such as i) security providers , fraud detection and prevention providers for example to help us screen out users associated with fraud, ii) social media platforms, when you log-in or sign-up using your social media account, we may receive Personal Information from that service (e.g., your username, basic profile Personal Information) and in some cases, we may collect Personal Information from lead enhancement companies which help us to improve our service offering; iii) advertising and marketing partners in order to monitor, manage and measure our ad campaigns.
We also collect information that is provided to us by jobs candidates (“Applicants”), when they apply to any of the open positions published at https://aseno.de/jobs, by e-mail or or through any other means provided by us. We understand that privacy and discreetness are crucial to our Applicants, and are committed to keep Applicants Personal Information  private and use it solely for ASENO internal recruitment purposes (including for identifying Applicants, evaluating their applications, making hiring and employment decisions, and contacting Applicants by phone or in writing).
If you previously submitted your Applicants Personal Information to ASENO, and now wish to access it, update it or have it deleted from ASENO systems, please contact us at carrer@aseno.de
                  </p>
                  {/* <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/blog/blog-details-01.jpg"
                        alt="image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div> */}
                  <h4 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Sharing Personal Information
                  </h4>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We may share your Personal Information with service providers and others (or otherwise allow them access to it) in the following manners and instances:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Third Party Service Providers: ASENO Ltd. has partnered with a number of selected service providers, whose services and solutions complement, facilitate and enhance our own. These include hosting and server co-location services, communications and content delivery networks (CDNs), data and cyber security services, billing and payment processing services, domain name registrars, fraud detection and prevention services, web analytics, e-mail distribution and monitoring services, session recording and remote access services, performance measurement, data optimization and marketing services, content providers, and our legal and financial advisors (collectively, “Third Party Service Provider(s)”).
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    identifiers, including name, alias, postal address, unique personal identifier, online identifier, internet protocol address, email address, account name, or other similar identifiers
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    commercial information, for example information regarding products or services purchased, obtained, or considered
                    </li>
                  </ul>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We may share the Personal Information of our Users and Users-of-Users with various third parties, including certain service providers and law enforcement officials.​
                  </p>
                  <ul>
                  <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Law Enforcement, Legal Requests and Duties: ASENO may disclose or otherwise allow access to your Personal Information pursuant to a legal request, such as a subpoena, legal proceedings, search warrant or court order, or in compliance with applicable laws, if we have a good faith belief that the law requires us to do so, with or without notice to you.​
                  </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Protecting Rights and Safety: ASENO may share your Personal Information if we believe in good faith that this will help protect the rights, property or personal safety of ASENO, any of our Users, any Users-of-Users, or any member of the general public, with or without notice to you. Location of our Personal Information
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Location of our Personal Information
                    </li>
                  </ul>

                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Users’ and Users-of-Users’ Personal Information may be stored in data centers located in the United States of America or Europa. We may use other jurisdictions as necessary for the proper delivery of our Services and/or as may be required by law (as further explained below).
                  </p>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  ASENO Ltd. is based in Germany. ASENO affiliates and Third-Party Service Providers that store or process your Personal Information on ASENO's behalf are contractually committed to keep it protected and secured, in accordance with industry standards and regardless of any lesser legal requirements which may apply in their jurisdiction.
                  </p>

                  <h4 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Cookies and other third-party technologies
                  </h4>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  We and our Third Party Service Providers use cookies and other similar technologies (“Cookies”) in  order for us to provide our Service and ensure that it performs properly, to analyze our performance and marketing activities, and to personalize your experience.
You can learn more about how we use cookies and similar technologies and how you can exercise control over them in our Cookie Policy.
Please note that we do not change our practices in response to a “Do Not Track” signal in the HTTP header from a browser or mobile application, however, most browsers allow you to control cookies, including whether or not to accept them and how to remove them. You may set most browsers to notify you if you receive a cookie, or you may choose to block cookies with your browser.
                  </p>
                  
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
