export default function AboutPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800 tracking-tight">
        About Ada Lovelace
      </h1>
      <div className="prose prose-lg prose-gray max-w-none">
        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2 mb-4">
          Vem var Ada Lovelace?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Augusta Ada Byron föddes i december 1815 i London. Hennes föräldrar var Anne Isabella Byron och George Gordon Byron, mest känd som Lord Byron. Anne Isabella (kallades Annabella) var en duktig matematiker och var redan som barn begåvad. Hennes föräldrar anställde en pensionerad professor från Cambridge Universitet och hon fick en utbildning inom klassisk litteratur, filosofi, naturvetenskap och matematik. Lord Byron var vid Adas födelse en av Englands mest kända poeter och en anhängare romantiken. Han var en notorisk kvinnotjusare, ständigt i skuld och hade ett rykte som <q className="italic text-gray-500">mad, bad and dangerous to know</q>.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Giftemålet mellan Annabella och Byron kan tyckas underligt då de var väldigt olika men de gifte sig i början 1815. Äkteskapet höll inte länge utan en månad efter Adas födelse så separerade de och Byron stack till Frankrike och skulle aldrig träffa sin dotter igen.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2 mb-4">
          Uppväxt
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Orolig för att Ada skulle få några av hennes fars mer rebelliska drag eller intresse för poesi fick Ada en strikt uppväxt som liknade hennes mammas i bl.a. matematik och logik. I ett utdrag från hennes guvernants dagbok kan vi läsa följande om hennes schema:
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 bg-blue-50 p-4 rounded-md my-4">
          lessons in the morning in arithmetic, grammar, spelling, reading, music, each no more than a quarter of an hour long - after dinner, geography, drawing, French, music, reading, all performed with alacrity and docility. (Hollings C, Martin U, Rice A, s.9)
        </blockquote>
        <p className="text-gray-600 leading-relaxed">
          Vid 13 års ålder hade hon bl.a. William Frend som lärare (som hade varit hennes mammas privatlärare) och via honom lärde hon känna Mary Somerville som var matematiker och populär författare. Genom Mary fick Ada en ingång till Londons vetenskapliga och litterära societet och 1833 träffade hon på Charles Babbage. 1835 gifte hon sig med William King, en något äldre herre som delade och uppmuntrade Adas intresse för matematik. 1838 blev King <q className="italic text-gray-500">Earl of Lovelace</q> och Ada blev då <q className="italic text-gray-500">Countess of Lovelace</q> och därefter Ada Lovelace. De flyttade ut en bit utanför London och fick tre barn. I ett brev till Mary Somerville kan vi läsa följande om Adas dedikation till matematiken:
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 bg-blue-50 p-4 rounded-md my-4">
          I now read Mathematics every day & am occupied in Trigonometry & in preliminaries to Cubic & Biquadratic Equations. So you see that matrimony has by no means lessened my taste for those pursuits, nor my determination to carry them on... (Hollings C, Martin U, Rice A, s.32)
        </blockquote>

        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2 mb-4">
          Charles Babbage
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Charles Babbage började arbeta på sin <q className="italic text-gray-500">The Analytical Engine</q> i mitten 1830-talet och han och Ada Lovelace blev goda vänner och hon fungerade som ett bollplank och fascinerades av denna maskin och dess möjligheter.
        </p>
        <p className="text-gray-600 leading-relaxed">
          1840 blev Babbage inbjuden till Turin för att hålla en föreläsning där Luigi Menabrea, en ung italiensk ingenjör, deltog. Han skrev sedan den första texten om <q className="italic text-gray-500">The Analytical Engine</q>. 1844 fick Ada förfrågan om att översätta denna text till engelska, där hon även utökade en hel del bl.a. med den appendix som kallas för <q className="italic text-gray-500">Note G</q> som innehåller instruktioner för hur ett program i <q className="italic text-gray-500">The Analytical Engine</q> skulle fungera. Det är <q className="italic text-gray-500">Note G</q> som brukar kallas för det första datorprogrammet och Ada därför den första programmeraren.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Till skillnad från Babbage såg Ada möjligheten att <q className="italic text-gray-500">The Analytical Engine</q> skulle kunna vara mer än bara en maskin som gör matematiska beräkningar. Utan den skulle rent teoretiskt kunna skapa musik eller konst. Såhär skriver hon i <q className="italic text-gray-500">Note G</q>:
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 bg-blue-50 p-4 rounded-md my-4">
          Supposing that the fundamental relations of pitched sounds in the science of harmony and of musical composition were susceptible of such expression and adaptations, the engine might compose elaborate and scientific pieces of music of any degree of complexity or extent. (Hollings C, Martin U, Rice A, s.82)
        </blockquote>
        <p className="text-gray-600 leading-relaxed">
          Tyvärr blev aldrig Babbage <q className="italic text-gray-500">The Analytical Engine</q> byggd då han inte fick några pengar för att bygga den.
        </p>

        <p className="text-gray-600 leading-relaxed">
          Ada hade kanske, till hennes moders besvikelse, en fascination för sin far som hon aldrig träffade (han dog 1824). Hon uppskattade poesi och funderade på att skriva matematiskt poesi. Hennes synsätt på matematik kanske bäst beskrivs i denna mening från ett brev till hennes mamma:
        </p>
        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 bg-blue-50 p-4 rounded-md my-4">
          If you can’t give me poetry, can’t you give me poetical science?
        </blockquote>
        <p className="text-gray-600 leading-relaxed">
          Det kanske var just Adas intresse att blanda matematik, logik, fantasi och poesi som gjorde att hon såg saker på ett annorlunda sätt.
        </p>

        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 border-blue-200 pb-2 mb-4">
          Källor
        </h2>
        <p className="text-gray-600 leading-relaxed">
          Hollings C, Martin U, Rice A. (2018). <i className="font-medium">Ada Lovelace: The Making of a Computer Scientist</i>
        </p>
      </div>
    </div>
  );
}