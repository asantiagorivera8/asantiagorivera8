import Hero from "./components/Hero"
import ServicesPreview from "./components/ServicesPreview"
import Newsletter from "./components/Newsletter"
import BlogPreview from "./components/BlogPreview"
import ClientsSection from "./components/ClientsSection"
import InspirationalQuote from "./components/InspirationalQuote"
import ReviewsSection from "./components/ReviewsSection"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <ClientsSection />
      <ReviewsSection />
      <BlogPreview />
      <InspirationalQuote />
      <Newsletter />
    </>
  )
}
