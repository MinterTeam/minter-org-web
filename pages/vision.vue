<script>
    export default {
        head() {
            const title = 'Get paid with Minter';
            const description = 'By embracing a new approach of routing transfers via the trustless network, we let anyone in the world use the Internet of Money';
            // const localeSuffix = this.$i18n.locale === 'en' ? '' : '-' + this.$i18n.locale;

            return {
                title: title,
                meta: [
                    { hid: 'og-title', name: 'og:title', content: title },
                    { hid: 'description', name: 'description', content: description },
                    { hid: 'og-description', name: 'og:description', content: description },
                    // { hid: 'og-image', name: 'og:image', content: `/img/social-share-wallet${localeSuffix}.png` },
                ],
            };
        },
    }
</script>

<template>
    <div>
        <div class="u-section">
            <div class="u-container">
                <h1 class="u-h1 u-mb-15">Minter changes the way people get paid and use money globally</h1>
                <p>By embracing a new approach of routing transfers via the trustless network, we&nbsp;let anyone in the world use the Internet of Money.</p>
                <div class="vision__money">
                    <div class="vision__money-image u-mt-20 u-mb-20 u-hidden-medium-down u-aspect-ratio" style="--aspect-ratio:420/359; width:420px">
                        <img src="/img/vision-money.png" srcset="/img/vision-money@2x.png 2x" alt="" width="420" height="359" role="presentation">
                    </div>
                    <div class="u-mt-15 u-mb-15">
                        <h5 class="u-h5">There are four critical levels of mass-market money forms in the world:</h5>
                        <div class="u-h u-h3  vision__money-item-title">Local communities</div>
                        <p>Goods and cash as payment methods</p>

                        <div class="u-h u-h3  vision__money-item-title">Cities</div>
                        <p>Cash, checks, and banks</p>

                        <div class="u-h u-h3  vision__money-item-title">Countries</div>
                        <p>Banks, cards, and e-wallets</p>

                        <div class="u-h u-h3  vision__money-item-title">World</div>
                        <p>Cards and e-wallets</p>
                    </div>
                </div>

                <p class="u-mb-10">With the growth in reach, the less efficient means of payment lose usage while retaining their position in specific countries and cities, as is seen with checks in the U.S. The main reason behind the application of more complex technologies on a world scale is the problem of reputation. Or, to put it in plain English: in a small community or town, individuals and businesses have a reputation, and it is easier for one to influence them and demand from them. In the world with hundreds of counterparties around us&#xfeff;—counterparties that we will never know anything about even if we try hard to—a system of intermediaries occurs that transfers money from one trusted party to another. This scenario holds for the whole chain, which—in the case of making a regular payment via a bank card on a website&#xfeff;—can include up to 20–30 companies.</p>
                <p class="u-mb-10">Let us define the key features of the modern economics:</p>
                <div class="u-mb-10 u-grid u-grid--medium u-grid--vertical-margin--small">
                    <div class="u-cell u-cell--medium--1-3">
                        <h4 class="u-h1 vision__feature-digit">1</h4>
                        <p class="vision__feature-description">The economies have more and more private actors on a global level, for example, freelancers;</p>
                    </div>
                    <div class="u-cell u-cell--medium--1-3">
                        <h4 class="u-h1 vision__feature-digit">2</h4>
                        <p class="vision__feature-description">There is no single system for exchanging information about transfers;</p>
                    </div>
                    <div class="u-cell u-cell--medium--1-3">
                        <h4 class="u-h1 vision__feature-digit">3</h4>
                        <p class="vision__feature-description">There is no single protected environment that would guarantee the security of funds.</p>
                    </div>
                </div>
                <p>The financial system attempts to fulfill the needs of 200 countries by leveraging technologies and methods that have remained unchanged for decades. That is why a bank-to-bank money transfer even within the same state may take days to complete while sending an SMS to anyone in the world is lightning-fast.</p>
<!--
                <p class="u-mb-10">Let us explore how money transfers work today and what Minter has done to facilitate them.</p>
                <p class="u-mb-10">Any transfer is carried out in three fundamental steps:</p>
                <div class="u-mb-10 u-grid u-grid--vertical-margin--small">
                    <div class="u-cell u-cell--medium--1-3">
                        <h3 class="u-h3 u-mb-05">1. Sending</h3>
                        <p class="vision__steps-description">
                            The sender “uploads” the money denominated in their national currency in the most convenient or familiar way—for example, using a bank card—and initiates the transfer/pays the invoice;
                            <img class="vision__steps-line--1 u-hidden-medium-down" src="/img/vision-line-45-down.svg" alt="" role="presentation">
                        </p>
                    </div>
                    <div class="u-cell u-cell--medium--1-3">
                        <h3 class="u-h3 u-mb-05">2. Receiving</h3>
                        <p class="vision__steps-description">
                            The transfer is delivered to the receiver and transformed into the form of money accepted in their community;
                            <img class="vision__steps-line--2 u-hidden-medium-down" src="/img/vision-line-45-down.svg" alt="" role="presentation">
                        </p>
                    </div>
                    <div class="u-cell u-cell--medium--1-3">
                        <h3 class="u-h3 u-mb-05">3. Using</h3>
                        <p class="vision__steps-description">
                            The receiver spends the money as they want.
                            <img class="vision__steps-line--3 u-hidden-medium-down" src="/img/vision-line-down.svg" alt="" role="presentation">
                        </p>
                    </div>
                </div>
                <div class="vision__steps-image u-mb-20 u-aspect-ratio" style="--aspect-ratio:376/105; width:376px;">
                    <img src="/img/vision-steps.png" srcset="/img/vision-steps@2x.png 2x" alt="" width="376" height="105" role="presentation">
                </div>
                <p>For all three steps to work in a fast and cost-efficient way globally (something we have already experienced using various Internet services), we need to change the approach entirely. To achieve that, we have to gather all three functions (Sending, Receiving, and Using) in one place and put away such steps as Depositing, Withdrawing, and Converting.</p>
-->
                <p>For the modern money transfers to work in a fast and cost-efficient way globally (something we have already experienced using various Internet services), we need to change the approach entirely. Minter has solved this problem by designing a unique system of electronic wallets that people, organizations, and payment partners can create and utilize on equal terms. How does this new kind of money transfer work?</p>
                <h3 class="u-h3 u-mt-10 u-mb-05">Depositing</h3>
                <p>The sender selects a payment partner to deposit the funds to their Minter account. The partner then provides the “last mile” functions&#xfeff;—runs the verification process, identifies the source of money, receives the payment, calculates the corresponding amount in USD, and deposits a USD stablecoin to the user’s Minter account;</p>
                <h3 class="u-h3 u-mt-10 u-mb-05">Paying</h3>
                <p>The sender enters the phone number/username of the recipient, the amount to transact, and presses the “Send” button. In five seconds, the funds are debited from the sender’s account and credited to the account of the receiver;</p>
                <h3 class="u-h3 u-mt-10 u-mb-05">Using</h3>
                <p>The receiver, whose money is now stored in a totally secure and stable environment, can take their time and choose a format of usage that would suit their needs: transfer money to other entities or withdraw it to cash (through the partners), cards, e-wallets, and even cryptos. The withdrawal procedure resembles that of depositing, only the other way round: the user sends the money to the partner, and the partner helps the user receive the funds in the desired way.</p>
                <p class="u-mt-10">Payment Processing Partners must serve as the the Deposit and Withdrawal gateways, while letting people manage money in a fast and secure way.</p>

                <h2 class="u-h1 u-mt-20 u-mb-15">What are Minter’s key differences from current systems?</h2>
                <ul class="list-simple">
                    <li>We are connecting the last miles through a single money network, something we call the Internet of Money;</li>
                    <li>Local presence of partners is more understandable to the user and appealing by terms;</li>
                    <li>All payments channeled through Minter have the same status and are based on the Push principle, meaning no one can charge another person’s funds or block them. It gives the feeling of the ultimate security&#xfeff;—if the funds are on your account, they are yours;</li>
                    <li>The receiver does not have to struggle because of the sender’s choice&#xfeff;—users deposit/withdraw the funds just like everyone else in their community, city, or state. The most vivid example here: the checks that are common for U.S. retirees are of no use for millennials residing in Southeast Asia.</li>
                </ul>
                <h5 class="u-h5 u-mb-15">In other words, the user receives global payments on a&nbsp;local scale.</h5>

                <div class="vision__zero-image u-aspect-ratio" style="--aspect-ratio:211/227; width:211px;">
                    <img src="/img/vision-zero.png" srcset="/img/vision-zero@2x.png 2x" alt="" width="211" height="227" role="presentation">
                </div>
                <!--<h5 class="u-h5">Minter does not charge transaction fees.</h5>-->
                <p> Minter does not charge transaction fees. <br> The user only pays the commission for converting and&nbsp;depositing the funds that is set by the partners and a&nbsp;small fee of less than 1&nbsp;U.S.&nbsp;cent for the&nbsp;transaction to&nbsp;be recorded on the Minter network’s blockchain.</p>
                <p>Any payment partner can connect to Minter by signing up and undergoing the onboarding procedure. Partners are free to set their own commissions, thereby creating open-market conditions for competition.</p>


                <p class="u-mt-15">But just how important are global transfers in general?</p>
                <p>Today, the global remittance market alone amounts to over $500 billion, of which transaction fees account for $50 billion. Below are the key growth factors:</p>
                <ul class="list-simple u-mb-10">
                    <li>Every day, the number of intellectual market workers, who want to be employed on a global level and at the same time act as freelancers, is increasing;</li>
                    <li>Small-sized Internet businesses that are ready to offer their services to the world face severe problems when trying to implement merchant payment processing services;</li>
                    <li>2.5 billion people worldwide do not have any bank cards and are unlikely to ever have one: for example, in Mexico, this figure stands at 90% of the adult population;</li>
                    <li>That is the reason why the share of e-wallets is growing at the highest pace in the global non-cash payments volume, as today, anyone can set up an electronic wallet easily and quickly. Moreover, almost all electronic wallets now allow users to issue a virtual debit Visa/MasterCard card and connect it to Apple/Android Pay in an instant.</li>
                </ul>
                <p>Today we are talking about transfers between users, but what does the future behold?</p>
                <ul class="list-simple u-mb-10">
                    <li>Direct deposits without creating a Minter wallet: the user chooses the most preferred way to receive money and makes an invoice; the sender then pays using the most convenient local option, and the receiver sees the money on their account after all conversions have taken place. The transfer is transmitted from partner to partner within the Minter network, batched in one transaction and at the cost of less than 1 U.S. cent;</li>
                    <li>Checkout for e-commerce: any website or service will have an opportunity to conduct trade at the international level while receiving payments from customers in a chosen local format and having funds deposited to the store’s bank or electronic account;</li>
                    <li>E-wallet settlement: market-leading e-wallet systems will utilize our solution for settling their own needs. It will be a revolution akin to the private cloud in hosting!</li>
                </ul>
            </div>
        </div>
    </div>
</template>
