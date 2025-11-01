import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Recycle, Heart, Users, TrendingUp } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <Recycle className="h-6 w-6 text-primary" />
            <span className="text-foreground">ClothCycle</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/browse"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Browse
            </Link>
            <Link
              to="/impact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Impact
            </Link>
            <Link
              to="/ngo"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              For NGOs
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:flex">
              <Link to="/browse">Browse</Link>
            </Button>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90">
              <Link to="/list">List Clothes</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border bg-muted/30 mt-16">
        <div className="container px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-bold text-lg">
                <Recycle className="h-5 w-5 text-primary" />
                <span>ClothCycle</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Reducing textile waste, one listing at a time.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Platform</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/browse" className="hover:text-foreground transition-colors">Browse Listings</Link></li>
                <li><Link to="/list" className="hover:text-foreground transition-colors">List Clothes</Link></li>
                <li><Link to="/impact" className="hover:text-foreground transition-colors">Impact</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">For Organizations</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/ngo" className="hover:text-foreground transition-colors">NGO Priority</Link></li>
                <li><Link to="/ngo" className="hover:text-foreground transition-colors">Verification</Link></li>
                <li><Link to="/ngo" className="hover:text-foreground transition-colors">Bulk Procurement</Link></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Connect</h4>
              <div className="flex gap-3">
                <Heart className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <Users className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                <TrendingUp className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 ClothCycle Marketplace. Built for sustainable fashion and community impact.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
