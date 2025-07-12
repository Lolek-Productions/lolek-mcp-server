import React, { useState } from 'react';
import PageContainer from '@/components/page-container';
import { FormField } from '@/components/form-field';
import { Button } from '@/components/ui/button';
import { SelectItem } from '@/components/ui/select';

export default function FormExamplePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    department: '',
    bio: '',
    startDate: '',
    salary: '',
    isActive: 'true'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const updateField = (field: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <PageContainer 
      title="Form Fields Example" 
      description="Demonstration of mandatory FormField component usage patterns"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Text Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            id="firstName"
            label="First Name"
            value={formData.firstName}
            onChange={updateField('firstName')}
            placeholder="Enter first name"
            required
          />
          <FormField
            id="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={updateField('lastName')}
            placeholder="Enter last name"
            required
          />
        </div>

        {/* Email Input with Description */}
        <FormField
          id="email"
          label="Email Address"
          inputType="email"
          value={formData.email}
          onChange={updateField('email')}
          placeholder="user@company.com"
          description="This will be used for login and notifications"
          required
        />

        {/* Phone Input */}
        <FormField
          id="phone"
          label="Phone Number"
          inputType="tel"
          value={formData.phone}
          onChange={updateField('phone')}
          placeholder="+1 (555) 123-4567"
        />

        {/* Select with Options Array */}
        <FormField
          id="role"
          label="Role"
          inputType="select"
          value={formData.role}
          onChange={updateField('role')}
          options={[
            { value: 'admin', label: 'Administrator' },
            { value: 'manager', label: 'Manager' },
            { value: 'employee', label: 'Employee' },
            { value: 'contractor', label: 'Contractor' }
          ]}
          required
        />

        {/* Select with Children */}
        <FormField
          id="department"
          label="Department"
          inputType="select"
          value={formData.department}
          onChange={updateField('department')}
          description="Select the primary department for this user"
        >
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="hr">Human Resources</SelectItem>
          <SelectItem value="finance">Finance</SelectItem>
        </FormField>

        {/* Textarea */}
        <FormField
          id="bio"
          label="Biography"
          inputType="textarea"
          value={formData.bio}
          onChange={updateField('bio')}
          placeholder="Brief professional biography..."
          rows={4}
          resize
          description="Optional professional summary (max 500 characters)"
        />

        {/* Date Input */}
        <FormField
          id="startDate"
          label="Start Date"
          inputType="date"
          value={formData.startDate}
          onChange={updateField('startDate')}
          required
        />

        {/* Number Input with Min/Max */}
        <FormField
          id="salary"
          label="Annual Salary"
          inputType="number"
          value={formData.salary}
          onChange={updateField('salary')}
          placeholder="50000"
          min="0"
          max="1000000"
          step="1000"
          description="Annual salary in USD"
        />

        {/* Select for Boolean-like Values */}
        <FormField
          id="isActive"
          label="Account Status"
          inputType="select"
          value={formData.isActive}
          onChange={updateField('isActive')}
          options={[
            { value: 'true', label: 'Active' },
            { value: 'false', label: 'Inactive' }
          ]}
          required
        />

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">
            Save Employee
          </Button>
        </div>
      </form>

      {/* Usage Guidelines */}
      <div className="mt-8 bg-muted/50 rounded-lg p-6 space-y-4">
        <h3 className="font-semibold text-lg">FormField Usage Guidelines</h3>
        
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="font-medium text-green-700">✅ Always Use FormField For:</h4>
            <ul className="mt-1 space-y-1 text-muted-foreground ml-4">
              <li>• All form inputs (text, email, password, number, etc.)</li>
              <li>• Textarea fields for multi-line input</li>
              <li>• Select dropdowns and option lists</li>
              <li>• Any input that needs a label and consistent styling</li>
              <li>• Required field indicators and descriptions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-amber-700">⚠️ Request Permission Before Using Direct Inputs For:</h4>
            <ul className="mt-1 space-y-1 text-muted-foreground ml-4">
              <li>• Search bars and filter inputs (usually don't need labels)</li>
              <li>• Inline editing controls (may need different styling)</li>
              <li>• Custom input patterns (file uploads, color pickers, etc.)</li>
              <li>• Specialized layouts (input groups, button combinations)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-red-700">❌ Never Use Direct Inputs For:</h4>
            <ul className="mt-1 space-y-1 text-muted-foreground ml-4">
              <li>• Standard form fields that FormField supports</li>
              <li>• Any input that could benefit from consistent labeling</li>
              <li>• Required field handling or descriptions</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-4">
          <p className="text-sm text-blue-800">
            <strong>Exception Request Format:</strong> When you need to use direct Input/Textarea/Select components, 
            use this format: "🚨 FORM FIELD EXCEPTION REQUEST: I need to use direct [Input/Textarea/Select] 
            for [specific use case] because FormField doesn't support [specific requirement]. May I proceed?"
          </p>
        </div>
      </div>
    </PageContainer>
  );
}