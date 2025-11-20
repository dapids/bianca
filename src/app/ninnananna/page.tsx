import { Metadata } from 'next';
import Image from 'next/image';
import styles from "../page.module.css";

export default function Ninnananna() {
  return (
    <div className={styles.container}>
      <header id={styles.header}>
        <Image src="/unicorn.png" alt="Unicorn" width={30} height={30} />
        <h1>Ninnananna</h1>
      </header>

      <main>
        <p>
          Quante stelle, quante stelle,<br/>
          dimmi tu la mia qual è.<br/>
          Non ambisco alla più bella,<br/>
          ma che sia vicina a te.<br/>
        </p>

        <p>
          Lì nel bosco e nel ruscello,<br/>
          lì nei monti, lì nel mar.<br/>
          Lì nel canto di un fringuello,<br/>
          che ti invita a riposar.<br/>
        </p>

        <p>
          Dormi Bianca, bimba bella,<br/>
          chiudi gli occhi piano pian,<br/>
          sotto il manto di una stella,<br/>
          che ti guarda da lontan.<br/>
        </p>

        <p>
          Sogni d&apos;oro piccolina,<br/>
          tra le braccia di papà.<br/>
          Che la notte si avvicina,<br/>
          ma domani arriverà.<br/>
        </p>
      </main>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Ninnananna',
  description: 'Una dolce ninnananna per la piccola Bianca.',
};
