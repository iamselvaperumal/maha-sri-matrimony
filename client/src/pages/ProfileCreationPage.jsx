import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const steps = [
  'Basic Info', 'Education', 'Location', 'Family', 'Partner Pref', 'Photos'
];

export default function ProfileCreationPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <div className="flex-grow max-w-4xl mx-auto w-full px-4 py-8 bg-gray-50 flex flex-col">
      <h1 className="text-3xl font-bold text-center text-primary mb-8">Complete Your Profile</h1>
      
      {/* Stepper */}
      <div className="flex justify-between items-center mb-8 overflow-x-auto pb-4 px-2">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center relative min-w-[80px]">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm z-10 
              ${index < currentStep ? 'bg-green-500 text-white' : index === currentStep ? 'bg-primary text-white border-4 border-primary/20' : 'bg-gray-200 text-gray-500'}`}
            >
              {index < currentStep ? <CheckCircle2 size={24} /> : index + 1}
            </div>
            <span className={`text-xs mt-2 font-medium ${index <= currentStep ? 'text-gray-900' : 'text-gray-400'}`}>{step}</span>
            {index < steps.length - 1 && (
              <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 ${index < currentStep ? 'bg-green-500' : 'bg-gray-200'}`} style={{ width: 'calc(100% + 40px)' }}></div>
            )}
          </div>
        ))}
      </div>

      <Card className="flex-grow shadow-lg border-t-4 border-t-primary bg-white">
        <CardContent className="p-6 md:p-8">
          
          {currentStep === 0 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Basic Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2"><Label>Height</Label><Input type="text" placeholder="e.g. 5'8&quot;" /></div>
                <div className="space-y-2"><Label>Marital Status</Label><Input type="text" placeholder="Never Married" /></div>
                <div className="space-y-2"><Label>Religion</Label><Input type="text" defaultValue="Hindu" /></div>
                <div className="space-y-2"><Label>Caste</Label><Input type="text" defaultValue="Devangar" /></div>
                <div className="space-y-2"><Label>Mother Tongue</Label><Input type="text" defaultValue="Tamil" /></div>
                <div className="space-y-2 md:col-span-2"><Label>About Me</Label><textarea className="w-full h-32 p-3 border rounded-md" placeholder="Write a short biography..."></textarea></div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Education & Career</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2"><Label>Highest Education</Label><Input type="text" placeholder="e.g. B.Tech / M.B.A" /></div>
                <div className="space-y-2"><Label>College / Institution</Label><Input type="text" placeholder="Enter college name" /></div>
                <div className="space-y-2"><Label>Occupation</Label><Input type="text" placeholder="e.g. Software Engineer" /></div>
                <div className="space-y-2"><Label>Annual Income</Label><Input type="text" placeholder="e.g. 10 Lakhs" /></div>
              </div>
            </div>
          )}
          
          {/* Mocking other steps to keep it brief */}
          {currentStep > 1 && currentStep < 5 && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-500">
              <div className="text-xl mb-4">Step {currentStep + 1} Content Area</div>
              <p>Form fields for {steps[currentStep]} will display here.</p>
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Profile Photos</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <p className="text-lg font-medium text-gray-700">Drag & Drop your photos here</p>
                <p className="text-sm text-gray-500 mt-2">or click to browse from your computer</p>
                <p className="text-xs text-primary mt-4 font-semibold text-center">Supported formats: JPG, PNG • Max size: 5MB</p>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 0} className="px-8 border-primary text-primary hover:bg-primary/5">
              Back
            </Button>
            <Button onClick={currentStep === steps.length - 1 ? () => alert('Profile Submitted!') : nextStep} className="px-8 bg-primary hover:bg-primary/90 text-white">
              {currentStep === steps.length - 1 ? 'Submit Profile' : 'Next Step'}
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
