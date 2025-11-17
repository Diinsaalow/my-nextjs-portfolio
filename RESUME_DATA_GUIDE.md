# Resume Data Management Guide

## Overview
Your portfolio now includes three professional sections: **Work Experience**, **Education**, and **Skills**. All data is centrally managed in a single JSON file for easy updates.

## Data Location
**File:** `lib/resume-data.json`

This file contains all your professional information and can be updated without touching any code.

## Structure

### Work Experience
```json
{
  "id": 1,
  "position": "Frontend Developer Intern",
  "company": "ZitAcademy",
  "duration": "3 Months",
  "period": "2023",
  "technologies": ["React.JS", "Material UI", "Tailwind CSS"],
  "description": "Brief description of your role and responsibilities"
}
```

### Education
```json
{
  "id": 1,
  "degree": "Bachelor",
  "field": "Computer Application & IT",
  "institution": "Jamhuriya University of Science and Technology (JUST)",
  "period": "2022-Present",
  "status": "In Progress",
  "location": "Mogadishu, Somalia"
}
```

### Skills
```json
{
  "frontend": ["HTML5", "CSS3", "JavaScript", ...],
  "backend": ["Node.js", "Express", ...],
  "design": ["Figma", "Adobe XD", ...],
  "tools": ["Git", "GitHub", ...]
}
```

## How to Update

### Adding New Work Experience
1. Open `lib/resume-data.json`
2. In the `workExperience` array, add a new object with a unique `id`
3. Fill in all required fields
4. Save the file - changes will appear immediately!

### Adding New Education
1. Open `lib/resume-data.json`
2. In the `education` array, add a new object
3. Use `"status": "In Progress"` or `"status": "Completed"`
4. The `field` and `location` are optional

### Updating Skills
1. Open `lib/resume-data.json`
2. Navigate to the `skills` object
3. Add or remove skills from any category
4. Skills are automatically organized by category

## New Sections Added

### 1. **Skills Section** (`#skills`)
- Displays your technical skills organized by category
- Frontend, Backend, Design, and Tools
- Animated skill tags with hover effects
- Icons for each category

### 2. **Work Experience Section** (`#experience`)
- Timeline-style layout
- Shows position, company, duration
- Lists technologies used
- Includes role description

### 3. **Education Section** (`#education`)
- Card-based grid layout
- Shows degree, institution, period
- Visual status badges (In Progress/Completed)
- Location information when available

## Page Order
Your portfolio now flows in this professional sequence:
1. Hero/Home
2. About
3. **Skills** (NEW)
4. **Experience** (NEW)
5. **Education** (NEW)
6. Portfolio/Projects
7. Contact

## Navigation
The header navigation has been updated to include links to all new sections.

## Features
✅ **Centralized Data Management** - Update everything from one JSON file
✅ **Smooth Animations** - All sections have framer-motion animations
✅ **Responsive Design** - Looks great on all devices
✅ **Dark Mode Support** - Works perfectly in both light and dark themes
✅ **Professional Timeline** - Experience section shows career progression
✅ **Status Badges** - Education shows current vs. completed studies
✅ **Technology Tags** - Skills and experience show tech stacks clearly

## Tips
- Keep descriptions concise and impactful
- Update the `period` field regularly for current positions
- Add new technologies as you learn them
- Maintain consistent formatting in the JSON file
- The `id` fields should be unique within each section

## Need Help?
If you need to modify the layout or styling of these sections, the component files are:
- `components/experience-section.tsx`
- `components/education-section.tsx`
- `components/skills-section.tsx`

