"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toolItems = [
    "Free AI Investment Calculators",
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-display font-bold text-primary">
              StreeDhana
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/products" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="/mutual-fund-sakhi-ginnie" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Mutual Fund Sakhi/Ginnie
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground/80 hover:text-primary transition-colors font-medium">
                Tools <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {toolItems.map((item) => (
                  <DropdownMenuItem key={item} className="cursor-pointer py-3">
                    {item}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/#faq" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Your Questions, Answered
            </a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              About Us
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Distributor Login
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Customer Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-4">
              <a href="/products" className="px-2 py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                Products
              </a>
              <a href="/mutual-fund-sakhi-ginnie" className="px-2 py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                Mutual Fund Sakhi/Ginnie
              </a>
              <div className="px-2">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Tools</p>
                {toolItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <a href="/#faq" className="px-2 py-2 text-foreground/80 hover:text-primary transition-colors">
                Your Questions, Answered
              </a>
              <a href="#about" className="px-2 py-2 text-foreground/80 hover:text-primary transition-colors">
                About Us
              </a>
              <div className="flex flex-col gap-2 px-2 pt-4 border-t border-border">
                <Button variant="outline" className="w-full border-primary text-primary">
                  Distributor Login
                </Button>
                <Button className="w-full bg-primary text-primary-foreground">
                  Customer Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
