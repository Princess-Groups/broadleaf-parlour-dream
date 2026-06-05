import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { CollageImage } from "@/components/CollageImage";
import { galleryImages } from "@/lib/gallery";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});


function Gallery() {
  return (
    <Layout>
      <section className="container mx-auto px-6 pt-20 md:pt-28 pb-12 text-center">
        <p className="text-base uppercase tracking-[0.2em] text-pink-deep mb-4">Our Work</p>
        <h1 className="font-display text-6xl md:text-7xl mb-6">Bridal Gallery</h1>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
          A seamless collage of the brides we've had the joy of styling — each look crafted with care, elegance, and a personal touch.
        </p>
      </section>

      <section className="w-full pb-20">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-1 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <CollageImage key={i} src={img.src} alt={img.alt} index={i} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
