import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TierBadge } from "@/components/ui/tier-badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, CheckCircle2, Info, ArrowRight, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ListClothes() {
  const [step, setStep] = useState(1);
  const [tier, setTier] = useState<"A" | "B" | null>(null);
  const { toast } = useToast();

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    toast({
      title: "Listing Created!",
      description: "We've sent a verification link to your contact. Check your email/SMS for your manage link.",
    });
  };

  return (
    <Layout>
      <div className="container px-4 py-8 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">List Your Clothes</h1>
          <p className="text-muted-foreground">
            No login required. Just verify via OTP and get your manage link instantly.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="mb-2" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Step {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
        </div>

        {/* Step 1: Item Details */}
        {step === 1 && (
          <Card className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Item Details</h2>
              <p className="text-muted-foreground mb-6">
                Tell us about the clothing item you're listing
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tshirts">T-Shirts</SelectItem>
                    <SelectItem value="shirts">Shirts</SelectItem>
                    <SelectItem value="jeans">Jeans</SelectItem>
                    <SelectItem value="dresses">Dresses</SelectItem>
                    <SelectItem value="hoodies">Hoodies</SelectItem>
                    <SelectItem value="ethnic">Ethnic Wear</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="size">Size *</Label>
                  <Select>
                    <SelectTrigger id="size">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="xs">XS</SelectItem>
                      <SelectItem value="s">S</SelectItem>
                      <SelectItem value="m">M</SelectItem>
                      <SelectItem value="l">L</SelectItem>
                      <SelectItem value="xl">XL</SelectItem>
                      <SelectItem value="xxl">XXL</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fabric">Fabric *</Label>
                  <Select>
                    <SelectTrigger id="fabric">
                      <SelectValue placeholder="Select fabric" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="polyester">Polyester</SelectItem>
                      <SelectItem value="denim">Denim</SelectItem>
                      <SelectItem value="silk">Silk</SelectItem>
                      <SelectItem value="blend">Blend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="condition">Condition Notes</Label>
                <Textarea
                  id="condition"
                  placeholder="Describe the condition, any wear patterns, etc."
                  className="min-h-24"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="defects" />
                <Label htmlFor="defects" className="text-sm cursor-pointer">
                  Item has visible defects (stains, tears, missing buttons, etc.)
                </Label>
              </div>
            </div>

            <Button onClick={handleNext} className="w-full" size="lg">
              Next: Choose Tier
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Card>
        )}

        {/* Step 2: Tier & Price */}
        {step === 2 && (
          <Card className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Choose Tier & Set Price</h2>
              <p className="text-muted-foreground mb-6">
                Select the tier that matches your item's condition
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setTier("A")}
                className={`p-6 rounded-lg border-2 text-left transition-all ${
                  tier === "A"
                    ? "border-tier-a bg-tier-a-light"
                    : "border-border hover:border-tier-a/50"
                }`}
              >
                <TierBadge tier="A" className="mb-3" />
                <h3 className="font-semibold text-lg mb-2">Old / Worn-Out</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Gently used with minor wear, slight fading or pilling
                </p>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Your price range</div>
                  <div className="text-2xl font-bold text-tier-a">₹10 - ₹30</div>
                  <div className="text-sm text-muted-foreground mt-2">Buyers pay: <span className="font-semibold text-foreground">₹50</span></div>
                </div>
              </button>

              <button
                onClick={() => setTier("B")}
                className={`p-6 rounded-lg border-2 text-left transition-all ${
                  tier === "B"
                    ? "border-tier-b bg-tier-b-light"
                    : "border-border hover:border-tier-b/50"
                }`}
              >
                <TierBadge tier="B" className="mb-3" />
                <h3 className="font-semibold text-lg mb-2">Good Quality</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Excellent condition, no defects, simply out-of-trend
                </p>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Your price range</div>
                  <div className="text-2xl font-bold text-tier-b">₹50 - ₹100</div>
                  <div className="text-sm text-muted-foreground mt-2">Buyers pay: <span className="font-semibold text-foreground">₹225</span></div>
                </div>
              </button>
            </div>

            {tier && (
              <div className="space-y-4 pt-4 border-t">
                <div className="space-y-2">
                  <Label htmlFor="price">Your Price (₹) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder={tier === "A" ? "10-30" : "50-100"}
                    min={tier === "A" ? 10 : 50}
                    max={tier === "A" ? 30 : 100}
                  />
                  <p className="text-sm text-muted-foreground">
                    <Info className="inline h-3 w-3 mr-1" />
                    Platform fee (7.5%) and payout fee (2%) will be deducted
                  </p>
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={handleNext} disabled={!tier} size="lg" className="flex-1">
                Next: Upload Photos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 3: Photos */}
        {step === 3 && (
          <Card className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Upload Photos</h2>
              <p className="text-muted-foreground mb-6">
                Add 2-6 clear photos of your item. Images will be auto-compressed.
              </p>
            </div>

            <div className="border-2 border-dashed border-border rounded-lg p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-2">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-muted-foreground">
                JPG, PNG or WebP (max 5MB per image)
              </p>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={handleNext} size="lg" className="flex-1">
                Next: Location & Contact
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        )}

        {/* Step 4: Location & Verification */}
        {step === 4 && (
          <Card className="p-6 space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Location & Contact</h2>
              <p className="text-muted-foreground mb-6">
                We'll verify your contact via OTP and send you a manage link
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input id="city" placeholder="e.g., Mumbai" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="pincode">Pin Code *</Label>
                <Input id="pincode" placeholder="e.g., 400001" />
              </div>

              <div className="space-y-2">
                <Label>Pickup Availability</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time window" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning (8 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 8 PM)</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact (Email or Phone) *</Label>
                <Input id="contact" placeholder="email@example.com or +91 9876543210" />
                <p className="text-sm text-muted-foreground">
                  We'll send an OTP to verify and provide your manage link
                </p>
              </div>
            </div>

            <div className="bg-ngo-priority-light border border-ngo-priority/20 rounded-lg p-4 space-y-2">
              <div className="flex items-start gap-2">
                <Info className="h-5 w-5 text-ngo-priority mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-sm">NGO Priority Window</p>
                  <p className="text-sm text-muted-foreground">
                    Your listing will be exclusive to verified NGOs for the first 2 hours. 
                    After that, public buyers can purchase.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleBack} variant="outline" size="lg" className="flex-1">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <Button onClick={handleSubmit} size="lg" className="flex-1 bg-primary hover:bg-primary/90">
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Publish Listing
              </Button>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  );
}
