import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import NewsLatterBox from "@/components/Contact/NewsLatterBox";
import Image from "next/image";

const LegalPage = () => {
  return (
    <>
      <section className="overflow-hidden pt-[180px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                Legal Notice
                </h2>
  
                <div>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                According to § 5 of the German Telemedia Act ( Telemediengesetz TMG )
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                ASENO Ltd.
                Blumenstrasse 18
                90571 Schwaig b. Nürnberg
                GERMANY
                </p>
                <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                
                Represented by Manfred Erlwein (CEO)
                {"\n"}
                Contact 
                {"\n"}
                Tel            +49-911-810078-91
                Fax           +49-911-810078-92
                E-Mail      info (AT) aseno (DOT) de
                
                </p>
            
                <h4 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Liability for content
                  </h4>
                  
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  The contents of our pages were created with great care. However, we cannot accept any liability for the correctness, completeness and topicality of the content. As a service provider, we are responsible for our own content on these pages in accordance with general law in accordance with Section 7 (1) of the German Telemedia Act. According to §§ 8 to 10 TMG, as a service provider, we are not obliged to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information according to general laws remain unaffected. However, liability in this regard is only possible from the point in time at which we become aware of a specific legal violation. As soon as we become aware of such legal violations, we will remove this content immediately. Despite careful content control, we assume no liability for the content of external links. The respective provider is solely responsible for the content of the linked pages. We expressly distance ourselves from it.
Responsible for content according to § 55 Abs. 2 RSTV: M.E. see above
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
                  Liability for links
                  </h4>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this third-party content. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time they were linked. No illegal content was found at the time the link was created. Permanent monitoring of the content of the linked pages is not reasonable without concrete evidence of a violation of the law. As soon as we become aware of legal violations, we will remove such links immediately.
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

export default LegalPage;
