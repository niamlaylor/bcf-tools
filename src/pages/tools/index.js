import ImportantNotesForm from "../../components/forms/IN-Form";
import Head from 'next/head';
import useApplicationData from "../../hooks/useApplicationData";
import { useEffect } from "react";

export default function ToolsLanding() {

  const {
    state,
    handleImportant,
    handleInformational,
  } = useApplicationData();

  useEffect(() => {
    console.log(state)
  }, [])

  return (
    <main>
      <Head>
        <title>BCF Tools | All Tools</title>
        <meta name="description" content="Home of all tools BCF to make our lives easier." />
      </Head>
      <ImportantNotesForm
        handleImportant={handleImportant}
      />
      <div onClick={() => handleImportant()}>
        {state.important && `<div style="border: 1px solid #cfd9de; border-radius: 10px; padding: 20px 20px 15px 20px; margin-bottom: 30px;">
            <span class="bcf bcf-icon-notice-outline bcf-vertical-middle dark-blue-color" style="width: 45px; font-size: 36px; margin-top: -5px;">&ZeroWidthSpace;</span><b class="dark-blue-color" style="font-size: 16px;">IMPORTANT NOTICE</b>
            <p class="font-size-14" style="margin-top: 10px;"><b class="font-size-16 dark-blue-color">Current conditions added on more routes</b></p>

            <p class="font-size-14" style="margin-top: 10px; font-weight: normal; line-height: normal;">
                More routes now have live webcams, the latest service notices, vessel tracking and up-to-date sailing information in one convenient location.
            </p>

            <p class="font-size-14" style="margin-top: 10px;">
                <strong><a href="https://www.bcferries.com/service-notice-changes" target="_blank">Learn more</a></strong>
            </p>
          </div>`}
        {!state.important && `<div style="border: 1px solid #cfd9de; border-radius: 10px; padding: 20px 20px 15px 20px; margin-bottom: 30px;">
            <span class="bcf bcf-icon-info-outline bcf-vertical-middle dark-blue-color" style="width: 45px; font-size: 36px; margin-top: -5px;">&ZeroWidthSpace;</span><b class="dark-blue-color" style="font-size: 16px;">IMPORTANT NOTICE</b>
            <p class="font-size-14" style="margin-top: 10px;"><b class="font-size-16 dark-blue-color">Current conditions added on more routes</b></p>

            <p class="font-size-14" style="margin-top: 10px; font-weight: normal; line-height: normal;">
                More routes now have live webcams, the latest service notices, vessel tracking and up-to-date sailing information in one convenient location.
            </p>

            <p class="font-size-14" style="margin-top: 10px;">
                <strong><a href="https://www.bcferries.com/service-notice-changes" target="_blank">Learn more</a></strong>
            </p>
          </div>`}
      </div>

    </main>
  )
}