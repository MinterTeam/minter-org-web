<script>
    export default {
        head() {
            const title = 'Minter Development Foundation';
            const description = 'We support the research and development of novel methods of value exchange for the public good';
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
            <div class="u-container u-container--large">
                <h1 class="u-h1 u-mb-15">Minter Development Foundation</h1>
                <p class="u-h5">We support the research and development of novel methods of value exchange for the public good</p>
                <p>Coordination is the most important problem we face as a species. A well-coordinated society
                    can overcome almost any obstacle – with perfect coordination most infectious diseases can be
                    overcome within a year, and world hunger is a direct consequence of suboptimal logistics and
                    resource allocation. Unfortunately, coordination is also the hardest problem.</p>
                <p>With the advances in economic theory and informational technology an opportunity was
                    presented to the mankind – we may be able to find a scalable solution to the trust issue of the
                    coordination problem. By introducing carefully weighed monetary incentives, we may finally be
                    able to create a society in which actors cooperate, and hunters choose stags over rabbits.</p>
                <p>Minter Development Foundation has been founded to support this line of&nbsp;research.</p>
                <p>Our main goal as a foundation is to support mass adoption of the “internet of money” concept
                    by providing financial grants to creators of projects within the Minter ecosystem. Our
                    foundation is going to hold educational events, communicate with parties interested in joining
                    the Network, develop opensource SDKs and maintain the library of active projects within the
                    Minter ecosystem.</p>
                <p>As a US nonprofit foundation, we accept donations in crypto- and fiat currencies and then
                    distribute received funds via grants to organizations that develop solutions within Minter
                    ecosystem and facilitate the mass adoption of the “internet of money” concept.  </p>

                <h2 class="u-h1 u-mt-20 u-mb-15">Contact us:</h2>

                <p><a href="mailto:hello@minter.org">hello@minter.org</a></p>

                <p>
                    Minter Development Foundation <br>
                    548 Market St #32852, <br>
                    San Francisco, <br>
                    California 94104-5401 <br>
                    EIN: 30-1195056
                </p>
            </div>
        </div>
    </div>
</template>
