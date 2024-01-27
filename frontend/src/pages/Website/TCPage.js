import React from 'react'

function TCPage() {
    return (
        <>
            {/* ============================================================================================== */}
            <div aria-hidden="true" className="topGradient absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
                <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
                <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
            </div>
            {/* ============================================================================================== */}

            <section className="relative  overflow-hidden bg-gradient-to-b from-blue-100 via-transparent to-transparent xl:pt-28">
                <div className="relative z-10">
                    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
                        <svg className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20" aria-hidden="true">
                            <defs>
                                <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                                    patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                                    <path d="M.5 200V.5H200" fill="none"></path>
                                </pattern>
                            </defs>
                            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                            </svg>
                            <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                            </rect>
                        </svg>
                    </div>
                </div>

                <div className="relative pt-24 sm:py-16 lg:pt-0 xl:pb-0">
                    <div className="pt-24 item-center justify-center mx-24">
                        <h1 class="fontH1 sm:text-8xl mb-4 font-semibold text-gray-900"><span className='text-primColor1'>#T&Cs </span>and Privacy Policy</h1>
                        <h1 className="text-lg font-bold">Description of the Platform</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Purpose and Function:</strong> Our platform aims to be a one-stop solution for all goods transportation needs, empowering both shippers and carriers with tools and functionalities to optimize their operations and achieve greater success.<br />
                            <strong>Interaction Mechanism:</strong><br />
                            <strong>For Shippers:</strong><br />
                            - Post Transportation Requests: Shippers can easily create and post their transportation requests, specifying details.<br />
                            - Browse Carrier Profiles: They can browse through profiles of verified carriers, reviewing their vehicle types, experience, reputation, and past customer reviews.<br />
                            - Request Quotes and Compare: Shippers can directly request quotes from multiple carriers, compare terms and pricing, and choose the offer that best suits their needs.<br />
                            - Secure Communication: Secure in-app chat and messaging features allow seamless communication between shippers and carriers for any questions or clarifications.<br />
                            <strong>For Carriers:</strong><br />
                            - Find Available Loads: Carriers can browse through listed transportation requests, filtering by vehicle type, location, and preferred route.<br />
                            - Submit Competitive Quotes: They can submit competitive quotes for requested loads, highlighting their strengths and experience to stand out from the competition.<br />
                            - Secure Bookings and Contracts: The platform facilitates secure booking and contract management, ensuring clarity and mutual agreement.<br />
                            - Accept Payments and Get Paid: Secure payment processing integrates seamlessly with the platform, guaranteeing timely and transparent transactions.<br />
                            - Manage Reputation: Carriers can build their reputation through positive reviews and successful deliveries, attracting more future business opportunities.<br />
                        </p>
                        <h1 className="text-lg font-bold">Additional Features</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Review and Rating System:</strong> Both shippers and carriers can leave reviews and ratings, fostering trust and accountability within the platform.<br />
                            <strong>Advanced Search and Filtering:</strong> Powerful search and filtering options help users find the perfect matches quickly and efficiently.<br />
                            <strong>Security and Insurance:</strong> The platform implements robust security measures and optional insurance add-ons to protect cargo and transactions.<br />
                        </p>
                        <h1 className="text-lg font-bold">User Obligations and Requirements</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Age and Authorization:</strong><br />
                            <strong>Shippers:</strong><br />
                            - Must be at least 18 years old and legally authorized to enter into contracts.<br />
                            - Businesses must be duly registered and operating legally.<br />
                            <strong>Carriers:</strong><br />
                            - Must be at least 21 years old and possess a valid driving license for the relevant vehicle type.<br />
                            - Must meet all legal requirements for operating commercial vehicles, including relevant permits, insurance, and safety certifications.<br />
                            <strong>Legal Compliance:</strong><br />
                            - All users must comply with all applicable local, national, and international laws and regulations governing goods transportation, including those related to cargo safety, documentation, tax, and customs.<br />
                            - Are responsible for ensuring the legality and accuracy of all information provided on the platform, including cargo descriptions, weights, and values.<br />
                            - Are solely responsible for any legal consequences arising from their actions or activities on the platform.<br />
                        </p>
                        <h1 className="text-lg font-bold">Platform Usage</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>All users must agree to the platform's Terms of Service and Privacy Policy, which outline their rights, responsibilities, and limitations on the platform.</strong><br />
                            - Users are expected to behave ethically and professionally in all interactions on the platform, fostering a respectful and cooperative environment.
                        </p>
                        <h1 className="text-lg font-bold">Liabilities and Responsibilities</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Platform's Role:</strong><br />
                            - Connecting Shippers and Carriers: We act as a bridge, efficiently connecting shippers with suitable carriers based on their needs.<br />
                            - Providing Tools and Functionality: We offer tools like request posting, quote generator, and communication features to support seamless logistics management.<br />
                            - Enhancing Transparency and Trust: We promote transparency by fostering open communication and a review system for building trust between users.<br />
                            <strong>User Responsibility:</strong> Users (shippers and carriers) are responsible for the legality and safety of the cargo transported.
                        </p>
                        <h1 className="text-lg font-bold">Usage Restrictions</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Prohibited Activities:</strong><br />
                            - Illegal transactions: Any activity involving the transport of illegal goods or items, such as drugs, weapons, or endangered species, is strictly prohibited.<br />
                            - Fraudulent behavior: Misrepresenting information, creating fake accounts, or attempting to deceive other users for any purpose is not tolerated.<br />
                            - Hate speech and discrimination: We value inclusivity and respect. Harassment, hate speech, or discriminatory behavior towards any individual or group is not permitted.<br />
                            - Violations of law: Any activity that contravenes local, national, or international laws and regulations is strictly prohibited. This includes, but is not limited to, traffic violations, safety regulations, and customs laws.<br />
                            - Platform misuse: Using the platform for purposes other than its intended use for facilitating legal goods transportation is not allowed.<br />
                            <strong>Cargo Restrictions:</strong><br />
                            - Hazardous materials: Transport of any item classified as hazardous material, such as explosives, flammable liquids, or toxic substances, is strictly prohibited unless in compliance with relevant regulations and proper documentation.<br />
                            - Perishable goods: While not explicitly banned, transporting perishable goods requires careful planning and clear communication between shipper and carrier to ensure freshness and quality upon arrival.<br />
                            - Stolen goods: Transporting any item suspected of being stolen is strictly prohibited. Users are obligated to report any such concerns immediately.<br />
                            - Items of high value: While not banned, transporting high-value items may require additional security measures and insurance arrangements to be agreed upon by both parties.<br />
                        </p>
                        <h1 className="text-lg font-bold">Payment Terms</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Payment Process:</strong><br />
                            - Freight Quote Approval: When a shipper approves a carrier's quote and books the shipment, both parties agree on the final transportation cost.<br />
                            - Secure Payment Processing: Shippers securely deposit the agreed-upon freight cost through our integrated payment gateway.<br />
                            - Escrow Hold: The payment is held in escrow until the shipment is successfully delivered and confirmed by the shipper. This protects both parties' interests.<br />
                            - Carrier Payment: Upon successful delivery and confirmation, the carrier receives the full payment released from escrow.<br />
                            <strong>Charges and Fees:</strong><br />
                            - Platform Fee: We charge a small percentage fee on each completed transaction to cover platform maintenance and development costs

                            . This fee is typically included in the carrier's quoted price.<br />
                            - Payment Processing Fee: Depending on the chosen payment method, additional processing fees may apply. These fees are clearly displayed during the payment process.<br />
                        </p>
                        <h1 className="text-lg font-bold">Account Management</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Account Creation:</strong><br />
                            - Sign Up: Choose your user type (shipper or carrier) and provide basic information like name, email address, and password.<br />
                            - Verification: Confirm your email address for security purposes.<br />
                            - Complete Your Profile: Provide additional details relevant to your role, such as company information for shippers or vehicle details for carriers.<br />
                            - Verification (Optional): For enhanced trust and access to certain features, consider uploading relevant documents like business licenses or driving licenses.<br />
                            <strong>Account Management:</strong><br />
                            - Update Information: Easily edit your profile details, contact information, and preferences at any time.<br />
                            - Payment Methods: Only cash preferred.<br />
                            - Notifications: Customize notification settings to receive updates on relevant activities, quotes, and deliveries.<br />
                            - Review and Ratings: View and manage your reviews and ratings from other users.<br />
                            - Support: Access our help center and FAQ resources, or contact our dedicated support team for any queries.<br />
                            <strong>Termination:</strong><br />
                            - User Initiated: You can choose to terminate your account at any time through the platform settings. We recommend downloading any relevant data before deactivation.<br />
                            - Platform Initiated: We reserve the right to terminate accounts for violating our Terms of Service, engaging in prohibited activities, or remaining inactive for extended periods.<br />
                        </p>
                        <h1 className="text-lg font-bold">Intellectual Property Rights</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Content Ownership:</strong><br />
                            - Platform Content: All text, graphics, logos, trademarks, service marks, and other content featured on the platform are owned by us or our licensors and protected by intellectual property laws. This includes, but is not limited to, website design, code, data, and user interface elements.<br />
                            - User Content: You retain ownership of any content you submit to the platform, such as your company information, vehicle details, descriptions of cargo, and communications with other users. However, by submitting content, you grant us a non-exclusive, perpetual, royalty-free, worldwide license to use, reproduce, modify, publish, and distribute such content in connection with operating and improving the platform.<br />
                            <strong>Usage Restrictions:</strong><br />
                            - You may not modify, copy, reverse engineer, disassemble, decompile, or create derivative works of the platform content.<br />
                            - You may not use the platform content for any commercial purpose without our express written permission.<br />
                            - You may not use the platform content in a way that infringes upon our or any third party's intellectual property rights.<br />
                            - You may not remove or obscure any proprietary notices, such as copyright or trademark symbols, from the platform content.<br />
                        </p>
                        <h1 className="text-lg font-bold">Dispute Resolution and Governing Law</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Resolution Mechanism:</strong><br />
                            - Direct Communication: We encourage users to address any concerns directly with each other through the platform's messaging system. Open and timely communication often leads to amicable resolutions.<br />
                            - Mediation: If direct communication fails, we offer voluntary mediation services to help users find a mutually agreeable solution. Our dedicated team of facilitators can guide the process and foster constructive dialogue.<br />
                            - Arbitration: For unresolved disputes exceeding a specific threshold, users may opt for binding arbitration through a neutral and reputable arbitration forum. This process is faster and more cost-effective than traditional litigation.<br />
                            - Legal Action: As a last resort, users may choose to pursue legal action through the courts of the governing jurisdiction (specified below).<br />
                            <strong>Governing Law:</strong><br />
                            - The terms of service and all related interactions on our platform are governed by the laws of (Specific Jurisdiction). This ensures clarity, predictability, and consistent application of legal principles for all users, regardless of their location.<br />
                        </p>
                        <h1 className="text-lg font-bold">Amendments and Updates to Terms</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Notification of Changes:</strong><br />
                            - Prominent Display: We will post any changes to the Terms of Service prominently on the platform and via appropriate notification channels, such as email or in-app/web messages. This provides ample opportunity for you to review and understand the updates.<br />
                            - Effective Date: We will specify an effective date for the updated terms, providing a clear timeframe for when they come into effect.<br />
                            - Summary of Changes: We will clearly highlight the key changes made to the Terms of Service, allowing you to quickly grasp the most important updates.<br />
                            <strong>Acceptance of Changes:</strong><br />
                            - Continued Use: Your continued use of the platform after the effective date of the updated Terms of Service constitutes your acceptance of the changes. This ensures everyone operating on the platform adheres to the latest guidelines.<br />
                            - Opt-Out: If you do not agree to the updated terms, you may choose to deactivate your account before the effective date. This allows you to retain control over your participation on the platform.<br />
                        </p>
                        <h1 className="text-lg font-bold">Contact Information</h1>
                        <p className='heading2 mb-8 leading-relaxed text-justify'>
                            <strong>Contact Details:</strong><br />
                            - Email: freightease.info@gmail.com<br />
                            - Phone: 0304-0193254, 0321-7678097, 0335-8668223<br />
                            - WhatsApp: On the same numbers. If changes then we will tell you<br />
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default TCPage