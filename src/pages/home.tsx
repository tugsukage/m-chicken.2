import { useState } from "react";
import { Phone, Facebook, MapPin, Clock, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import heroImage from "@assets/generated_images/hero_fried_chicken_platter.png";
import friedChickenImg from "@assets/generated_images/ried_chicken_menu_item.png";
import grilledChickenImg from "../../assets/generated_images/grilled_chicken_menu_item.png";
import wingsImg from "../../assets/generated_images/chicken_wings_menu_item.png";
import spicyChickenImg from "../../assets/generated_images/spicy_chicken_menu_item.png";
import burgerImg from "../../assets/generated_images/chicken_burger_menu_item.png";
import comboImg from "../../assets/generated_images/family_combo_menu_item.png";
import gallery1 from "../../assets/generated_images/gallery_chicken_meal_overhead.png";
import gallery2 from "../../assets/generated_images/gallery_family_dining_moment.png";
import gallery3 from "../../assets/generated_images/gallery_chicken_preparation.png";
import gallery4 from "../../assets/generated_images/gallery_combo_meal_box.png";
import gallery5 from "../../assets/generated_images/gallery_grilled_chicken_skewers.png";
import gallery6 from "../../assets/generated_images/gallery_chicken_tenders_platter.png";
import gallery7 from "../../assets/generated_images/gallery_fresh_ingredients.png";
import gallery8 from "../../assets/generated_images/gallery_takeout_boxes.png";

const menuItems = [
  {
    id: "fried-chicken",
    name: "Classic Fried Chicken",
    description: "Our signature crispy golden fried chicken, marinated for 24 hours and fried to perfection. Juicy on the inside, crunchy on the outside.",
    price: "$8.99",
    image: friedChickenImg,
  },
  {
    id: "grilled-chicken",
    name: "Grilled Chicken",
    description: "Tender grilled chicken breast with beautiful char marks, seasoned with our special herb blend. A healthier option that doesn't compromise on flavor.",
    price: "$9.99",
    image: grilledChickenImg,
  },
  {
    id: "wings",
    name: "Chicken Wings",
    description: "Crispy chicken wings tossed in your choice of sauce: buffalo, BBQ, honey garlic, or plain. Perfect for sharing or keeping all to yourself!",
    price: "$7.99",
    image: wingsImg,
  },
  {
    id: "spicy",
    name: "Spicy Chicken",
    description: "For those who love heat! Our crispy fried chicken coated with our signature spicy blend featuring cayenne, paprika, and secret spices.",
    price: "$9.49",
    image: spicyChickenImg,
  },
  {
    id: "burger",
    name: "Chicken Burger",
    description: "Crispy fried chicken patty on a toasted brioche bun with fresh lettuce, tomato, pickles, and our special M Chicken sauce.",
    price: "$10.99",
    image: burgerImg,
  },
  {
    id: "combo",
    name: "Family Combo",
    description: "Perfect for the whole family! 12 pieces of mixed chicken, large fries, coleslaw, 4 biscuits, and your choice of 4 drinks. Feeds 4-5 people.",
    price: "$34.99",
    image: comboImg,
  },
];

const galleryImages = [
  { src: gallery1, alt: "Delicious chicken meal from overhead" },
  { src: gallery2, alt: "Family enjoying M Chicken together" },
  { src: gallery3, alt: "Fresh chicken being prepared" },
  { src: gallery4, alt: "Combo meal box" },
  { src: gallery5, alt: "Grilled chicken skewers" },
  { src: gallery6, alt: "Chicken tenders platter" },
  { src: gallery7, alt: "Fresh ingredients" },
  { src: gallery8, alt: "Takeout boxes" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 hover-elevate active-elevate-2 rounded-md px-2 py-1"
              data-testid="link-home"
            >
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">M</span>
              </div>
              <span className="text-xl md:text-2xl font-bold text-foreground">M Chicken</span>
            </button>
            
            <nav className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection("menu")} className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-menu">Menu</button>
              <button onClick={() => scrollToSection("prices")} className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-prices">Prices</button>
              <button onClick={() => scrollToSection("gallery")} className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-gallery">Gallery</button>
              <button onClick={() => scrollToSection("contact")} className="text-foreground hover-elevate px-3 py-2 rounded-md" data-testid="link-contact">Contact</button>
            </nav>
            
            <div className="flex items-center gap-2">
              <Button onClick={() => scrollToSection("order")} size="default" className="hidden sm:flex" data-testid="button-order-now">
                Order Now
              </Button>
              
              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px]">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-8">
                    <button
                      onClick={() => scrollToSection("menu")}
                      className="text-left text-lg py-2 hover-elevate rounded-md px-3"
                      data-testid="link-mobile-menu"
                    >
                      Menu
                    </button>
                    <button
                      onClick={() => scrollToSection("prices")}
                      className="text-left text-lg py-2 hover-elevate rounded-md px-3"
                      data-testid="link-mobile-prices"
                    >
                      Prices
                    </button>
                    <button
                      onClick={() => scrollToSection("gallery")}
                      className="text-left text-lg py-2 hover-elevate rounded-md px-3"
                      data-testid="link-mobile-gallery"
                    >
                      Gallery
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="text-left text-lg py-2 hover-elevate rounded-md px-3"
                      data-testid="link-mobile-contact"
                    >
                      Contact
                    </button>
                    <Button
                      onClick={() => scrollToSection("order")}
                      size="default"
                      className="w-full mt-4"
                      data-testid="button-mobile-order"
                    >
                      Order Now
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/55 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" data-testid="text-hero-title">
            Fresh, Delicious Chicken Every Day
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8">
            Family-owned, locally loved. Serving the crispiest, most flavorful chicken in town since day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("order")}
              variant="default"
              data-testid="button-hero-order"
            >
              Order Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("menu")}
              className="backdrop-blur-sm bg-white/10 border-white/40 text-white"
              data-testid="button-hero-menu"
            >
              View Menu
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-about-title">About M Chicken</h2>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground">
              <p>
                At M Chicken, we believe that great food starts with great ingredients. That's why we source only the freshest, 
                highest-quality chicken from local farms and prepare it fresh daily in our kitchen.
              </p>
              <p>
                Our secret? A 24-hour marinade process using our family recipe passed down through generations, combined with 
                modern cooking techniques to ensure every bite is perfectly crispy on the outside and juicy on the inside.
              </p>
              <p className="font-semibold text-foreground">
                Whether you're feeding your family, hosting friends, or just treating yourself, M Chicken delivers the quality 
                and flavor you deserve. Every single time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-menu-title">Our Menu</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover-elevate" data-testid={`card-menu-${item.id}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    data-testid={`img-menu-${item.id}`}
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl md:text-2xl" data-testid={`text-menu-name-${item.id}`}>
                      {item.name}
                    </CardTitle>
                    <span className="text-2xl font-bold text-primary shrink-0" data-testid={`text-menu-price-${item.id}`}>
                      {item.price}
                    </span>
                  </div>
                  <CardDescription className="text-base" data-testid={`text-menu-desc-${item.id}`}>
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-prices-title">Pricing</h2>
          
          <div className="bg-card rounded-lg overflow-hidden border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left py-4 px-6 font-semibold">Item</th>
                    <th className="text-left py-4 px-6 font-semibold hidden sm:table-cell">Description</th>
                    <th className="text-right py-4 px-6 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {menuItems.map((item, index) => (
                    <tr key={item.id} className="hover-elevate" data-testid={`row-price-${item.id}`}>
                      <td className="py-4 px-6">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-sm text-muted-foreground sm:hidden mt-1">{item.description}</div>
                      </td>
                      <td className="py-4 px-6 text-muted-foreground hidden sm:table-cell">
                        {item.description}
                      </td>
                      <td className="py-4 px-6 text-right font-bold text-primary text-lg">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-16 md:py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="text-order-title">Ready to Order?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12">
            Choose your preferred ordering method and get your fresh M Chicken delivered or ready for pickup!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover-elevate">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Call to Order</CardTitle>
                <CardDescription className="text-base">
                  Speak directly with our team for personalized service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => window.location.href = 'tel:+11234567890'}
                  data-testid="button-call-order"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (+976) 88832313
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Facebook className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Facebook Messenger</CardTitle>
                <CardDescription className="text-base">
                  Quick and easy ordering through Facebook
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  onClick={() => window.open('https://www.facebook.com/messages/t/541073769082330', '_blank')}
                  data-testid="button-messenger-order"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Message Us
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Delivery Service</CardTitle>
                <CardDescription className="text-base">
                  Get M Chicken delivered right to your door
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full"
                  onClick={() => scrollToSection("contact")}
                  data-testid="button-delivery-order"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Contact for Delivery
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-gallery-title">Gallery</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg hover-elevate transition-transform"
                data-testid={`img-gallery-${index}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="text-location-title">Visit Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-card rounded-lg overflow-hidden border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4246.405637632768!2d105.9521944447442!3d49.47205658354147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da2dc34836b9937%3A0xe67d484b0bc2aceb!2zRlhGMys2Mkog0JTQsNGA0YXQsNC9INGF0L7RgiwgRGFyaGFuLCBEYXJraGFuLVV1bA!5e0!3m2!1sen!2smn!4v1764168837306!5m2!1sen!2smn"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="M Chicken Location"
                  data-testid="map-location"
                ></iframe>
              </div>
            </div>
            
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <MapPin className="w-5 h-5 text-primary" />
                    Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-1">
                  <p data-testid="text-address" className="text-base">123 Main Street</p>
                  <p className="text-base">Downtown District</p>
                  <p className="text-base">City, State 12345</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Clock className="w-5 h-5 text-primary" />
                    Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-base">
                  <div className="flex justify-between items-center" data-testid="text-hours-weekday">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-semibold text-foreground">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center" data-testid="text-hours-weekend">
                    <span className="text-muted-foreground">Saturday - Sunday</span>
                    <span className="font-semibold text-foreground">10:00 AM - 11:00 PM</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12" data-testid="text-contact-title">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <a
                href="tel:+97688832313"
                className="text-lg text-primary hover:underline block"
                data-testid="link-phone"
              >
                (+973) 88832313
              </a>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <a
                href="mailto:info@mchicken.com"
                className="text-lg text-primary hover:underline block"
                data-testid="link-email"
              >
                info@mchicken.com
              </a>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Facebook className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Social Media</h3>
              <a
                href="https://www.facebook.com/profile.php?id=61570014965823"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-primary hover:underline block"
                data-testid="link-facebook"
              >
                @MChicken
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-2xl">M</span>
              </div>
              <span className="text-2xl font-bold">M Chicken</span>
            </div>
            <p className="text-background/80">
              Fresh, delicious chicken made with love. Family-owned and locally loved.
            </p>
            <div className="flex items-center justify-center gap-6 pt-4">
              <button
                onClick={() => scrollToSection("menu")}
                className="hover:text-primary transition-colors"
                data-testid="link-footer-menu"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition-colors"
                data-testid="link-footer-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
                data-testid="link-footer-contact"
              >
                Contact
              </button>
            </div>
            <div className="pt-6 border-t border-background/20">
              <p className="text-sm text-background/60">
                © 2024 M Chicken. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
