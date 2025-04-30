
import React from 'react';
import Layout from '@/components/dashboard/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Check } from 'lucide-react';

const Settings = () => {
  return (
    <Layout>
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        
        <Tabs defaultValue="profile">
          <TabsList className="mb-6">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="banking">Banking</TabsTrigger>
            <TabsTrigger value="kyc">KYC Documents</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Business Profile</CardTitle>
                <CardDescription>Update your business information</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="millName">Mill Name</Label>
                      <Input id="millName" defaultValue="AgriPro Mills" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="businessType">Business Type</Label>
                      <Input id="businessType" defaultValue="Rice Mill" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN</Label>
                      <Input id="pan" defaultValue="ABCDE1234F" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gstin">GSTIN</Label>
                      <Input id="gstin" defaultValue="27ABCDE1234F1Z5" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cin">CIN</Label>
                      <Input id="cin" defaultValue="L12345MH2010PLC123456" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="yearEstablished">Year Established</Label>
                      <Input id="yearEstablished" type="number" defaultValue="2010" disabled />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Business Address</Label>
                    <Input id="address" defaultValue="123 Mill Road, Industrial Area" disabled />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="Pune" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input id="state" defaultValue="Maharashtra" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input id="pincode" defaultValue="411001" disabled />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contactPerson">Contact Person</Label>
                      <Input id="contactPerson" defaultValue="Rajesh Sharma" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation</Label>
                      <Input id="designation" defaultValue="Finance Manager" disabled />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Input id="email" type="email" defaultValue="finance@agripromills.com" disabled />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" />
                          Verify
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Input id="phone" defaultValue="+91 98765 43210" disabled />
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 px-2 flex items-center gap-1"
                        >
                          <Check className="w-3 h-3" />
                          Verify
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button type="button">Edit Details</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="banking">
            <Card>
              <CardHeader>
                <CardTitle>Banking Information</CardTitle>
                <CardDescription>Manage your bank accounts and auto-debit settings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-medium">Primary Bank Account</div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-gray-500">Bank Name</Label>
                        <div>HDFC Bank</div>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-500">Account Type</Label>
                        <div>Current</div>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-500">Account Number</Label>
                        <div>XXXX XXXX 5678</div>
                      </div>
                      <div>
                        <Label className="text-sm text-gray-500">IFSC Code</Label>
                        <div>HDFC0001234</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-medium">Auto-Debit Mandate</div>
                      <div className="flex items-center space-x-2">
                        <Switch id="autoDebit" defaultChecked />
                        <Label htmlFor="autoDebit">Active</Label>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      Auto-debit allows us to automatically debit your account on invoice due dates.
                      This helps maintain your credit score and prevents missed payments.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline">Modify Mandate</Button>
                      <Button variant="outline">View Agreement</Button>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-medium">UPI Details</div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-gray-500">UPI ID</Label>
                        <div>millprocessing@okhdfcbank</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button>Add Another Bank Account</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="kyc">
            <Card>
              <CardHeader>
                <CardTitle>KYC Documents</CardTitle>
                <CardDescription>Upload and manage verification documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-medium">Business Documents</div>
                      <div className="text-green-600 text-sm font-medium">Verified</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-gray-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                        </div>
                        <div>
                          <div className="font-medium">GST Certificate</div>
                          <div className="text-xs text-gray-500">Uploaded on 2025-01-15</div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto">View</Button>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-gray-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                        </div>
                        <div>
                          <div className="font-medium">CIN Certificate</div>
                          <div className="text-xs text-gray-500">Uploaded on 2025-01-15</div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto">View</Button>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text text-gray-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                        </div>
                        <div>
                          <div className="font-medium">PAN Card</div>
                          <div className="text-xs text-gray-500">Uploaded on 2025-01-15</div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto">View</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-medium">Authorized Signatory Documents</div>
                      <div className="text-green-600 text-sm font-medium">Verified</div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user text-gray-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <div>
                          <div className="font-medium">ID Proof</div>
                          <div className="text-xs text-gray-500">Uploaded on 2025-01-16</div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto">View</Button>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-home text-gray-500"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        </div>
                        <div>
                          <div className="font-medium">Address Proof</div>
                          <div className="text-xs text-gray-500">Uploaded on 2025-01-16</div>
                        </div>
                        <Button variant="ghost" size="sm" className="ml-auto">View</Button>
                      </div>
                    </div>
                  </div>
                  
                  <Button>Upload Additional Documents</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Manage how and when you receive alerts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Email Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="emailNewInvoice">New Invoice Authentication Requests</Label>
                        <Switch id="emailNewInvoice" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="emailFinancingOffers">New Financing Offers</Label>
                        <Switch id="emailFinancingOffers" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="emailUpcomingPayments">Upcoming Payment Reminders</Label>
                        <Switch id="emailUpcomingPayments" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="emailDocumentUpdates">Document Updates</Label>
                        <Switch id="emailDocumentUpdates" defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="emailNewFeatures">Platform Updates & New Features</Label>
                        <Switch id="emailNewFeatures" />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="font-medium mb-4">SMS Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="smsNewInvoice">New Invoice Authentication Requests</Label>
                        <Switch id="smsNewInvoice" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="smsFinancingOffers">New Financing Offers</Label>
                        <Switch id="smsFinancingOffers" />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="smsUpcomingPayments">Upcoming Payment Reminders</Label>
                        <Switch id="smsUpcomingPayments" defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="emailAddress">Email Address for Notifications</Label>
                      <Input id="emailAddress" defaultValue="finance@agripromills.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number for SMS</Label>
                      <Input id="phoneNumber" defaultValue="+91 98765 43210" />
                    </div>
                  </div>
                  
                  <Button>Save Preferences</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Settings;
