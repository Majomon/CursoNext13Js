"use client";
// Solo se puede usar useRouter desde un componente cliente
import { useRouter } from "next/navigation";

export const metadata = {
  title: "About Page",
};

export default function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About page</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
        aliquam similique voluptate omnis porro quos alias quo! A cum placeat
        corrupti incidunt ipsum repellat praesentium. Sunt vitae libero ipsum
        sed. Nisi, mollitia expedita eos magni laboriosam excepturi quibusdam
        nam sequi. Neque laboriosam culpa amet exercitationem? Voluptates nulla
        eaque quod eos, voluptatem ut, fugiat nam adipisci ratione quae aperiam
        accusamus expedita. Neque iusto amet culpa dignissimos possimus
        veritatis nostrum! Reiciendis esse, quae omnis repellendus vitae maiores
        dicta doloribus suscipit repudiandae dolores ullam hic sint incidunt eum
        quaerat aspernatur laboriosam nulla voluptates? Alias non dolore maxime
        vero doloribus sunt amet. Exercitationem, a laboriosam! Eaque ullam
        minima, repellendus sit voluptates delectus alias cumque recusandae
        tempora reiciendis fugiat. Distinctio obcaecati voluptatibus
        necessitatibus iusto nulla! Minima officiis ea ad ullam nam dolorum
        adipisci officia illum laudantium omnis. Ipsum aliquid consequuntur
        doloremque pariatur nostrum quae ad inventore saepe facilis et
        exercitationem alias iusto dolore, tenetur ullam. Doloribus nemo aliquid
        eaque fuga? Numquam unde aut, ut rem ex eius minima rerum cum delectus,
        sit, ratione pariatur. Corrupti amet laborum debitis temporibus porro
        quasi ratione hic eligendi quis! Tenetur quia consequuntur inventore
        sunt pariatur. Facilis reprehenderit cumque maxime, veniam iure aliquid
        autem dolore quod, harum ducimus nulla illum qui unde nobis obcaecati
        magni odio eos praesentium!
      </p>

      <button
        className="bg-sky-400 py-2 px-3 rounded-md"
        onClick={() => {
          alert("Antes de ir a la siguiente ruta / puedo ejecutar codigo.");
          router.push("/");
        }}
      >
        Click
      </button>
    </section>
  );
}
