import ImportantNotesForm from "../../components/forms/IN-Form";
import Head from 'next/head';

export default function ToolsLanding() {
  return (
    <main>
      <Head>
        <title>BCF Tools | All Tools</title>
        <meta name="description" content="Home of all tools BCF to make our lives easier." />
      </Head>
      <ImportantNotesForm/>
    </main>
  )
}