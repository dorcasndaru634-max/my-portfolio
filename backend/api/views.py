from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import About, Contact, CV, Education, Experience, Skill, Message, Project

@csrf_exempt
@require_http_methods(["GET", "POST"])
def about_view(request):
    if request.method == "GET":
        about = About.objects.first()
        if about:
            data = {
                "name": about.name,
                "title": about.title,
                "description1": about.description1,
                "description2": about.description2,
                "education": about.education,
                "web_dev": about.web_dev,
                "it_skills": about.it_skills,
                "career_goal": about.career_goal,
                "image_url": about.image_url,
            }
            return JsonResponse(data)
        return JsonResponse({"error": "No about data found"}, status=404)
    
    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            about, created = About.objects.update_or_create(
                defaults={
                    "name": data.get("name", ""),
                    "title": data.get("title", ""),
                    "description1": data.get("description1", ""),
                    "description2": data.get("description2", ""),
                    "education": data.get("education", ""),
                    "web_dev": data.get("web_dev", ""),
                    "it_skills": data.get("it_skills", ""),
                    "career_goal": data.get("career_goal", ""),
                    "image_url": data.get("image_url", ""),
                }
            )
            return JsonResponse({"success": True, "id": about.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

@csrf_exempt
@require_http_methods(["GET", "POST"])
def contact_view(request):
    if request.method == "GET":
        contact = Contact.objects.first()
        if contact:
            data = {
                "title": contact.title,
                "description": contact.description,
                "email": contact.email,
                "phone": contact.phone,
                "location": contact.location,
            }
            return JsonResponse(data)
        return JsonResponse({"error": "No contact data found"}, status=404)
    
    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            contact, created = Contact.objects.update_or_create(
                defaults={
                    "title": data.get("title", "Contact Me"),
                    "description": data.get("description", ""),
                    "email": data.get("email", ""),
                    "phone": data.get("phone", ""),
                    "location": data.get("location", ""),
                }
            )
            return JsonResponse({"success": True, "id": contact.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

@csrf_exempt
@require_http_methods(["GET", "POST"])
def cv_view(request):
    if request.method == "GET":
        cv = CV.objects.first()
        if cv:
            data = {
                "name": cv.name,
                "title": cv.title,
                "email": cv.email,
                "phone": cv.phone,
                "location": cv.location,
                "summary": cv.summary,
                "educations": [
                    {
                        "degree": edu.degree,
                        "school": edu.school,
                        "year": edu.year,
                    }
                    for edu in cv.educations.all()
                ],
                "experiences": [
                    {
                        "role": exp.role,
                        "company": exp.company,
                        "period": exp.period,
                        "description": exp.description,
                    }
                    for exp in cv.experiences.all()
                ],
                "skills": [skill.name for skill in cv.skills.all()],
            }
            return JsonResponse(data)
        return JsonResponse({"error": "No CV data found"}, status=404)
    
    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            cv, created = CV.objects.update_or_create(
                defaults={
                    "name": data.get("name", ""),
                    "title": data.get("title", ""),
                    "email": data.get("email", ""),
                    "phone": data.get("phone", ""),
                    "location": data.get("location", ""),
                    "summary": data.get("summary", ""),
                }
            )
            
            # Update educations
            cv.educations.all().delete()
            for edu_data in data.get("educations", []):
                Education.objects.create(
                    cv=cv,
                    degree=edu_data.get("degree", ""),
                    school=edu_data.get("school", ""),
                    year=edu_data.get("year", ""),
                )
            
            # Update experiences
            cv.experiences.all().delete()
            for exp_data in data.get("experiences", []):
                Experience.objects.create(
                    cv=cv,
                    role=exp_data.get("role", ""),
                    company=exp_data.get("company", ""),
                    period=exp_data.get("period", ""),
                    description=exp_data.get("description", ""),
                )
            
            # Update skills
            cv.skills.all().delete()
            for skill_name in data.get("skills", []):
                Skill.objects.create(cv=cv, name=skill_name)
            
            return JsonResponse({"success": True, "id": cv.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)

@csrf_exempt
@require_http_methods(["POST"])
def message_view(request):
    try:
        data = json.loads(request.body)
        message = Message.objects.create(
            name=data.get("name", ""),
            email=data.get("email", ""),
            subject=data.get("subject", ""),
            message=data.get("message", ""),
        )
        return JsonResponse({"success": True, "id": message.id})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=400)

@csrf_exempt
@require_http_methods(["GET", "POST", "PUT", "DELETE"])
def project_view(request, project_id=None):
    if request.method == "GET":
        if project_id:
            try:
                project = Project.objects.get(id=project_id)
                data = {
                    "id": project.id,
                    "title": project.title,
                    "description": project.description,
                    "image": project.image.url if project.image else "",
                    "github": project.github,
                    "live_demo": project.live_demo,
                    "technologies": project.technologies,
                    "featured": project.featured,
                    "created_at": project.created_at.isoformat(),
                }
                return JsonResponse(data)
            except Project.DoesNotExist:
                return JsonResponse({"error": "Project not found"}, status=404)
        else:
            projects = Project.objects.all()
            data = [
                {
                    "id": project.id,
                    "title": project.title,
                    "description": project.description,
                    "image": project.image.url if project.image else "",
                    "github": project.github,
                    "live_demo": project.live_demo,
                    "technologies": project.technologies,
                    "featured": project.featured,
                    "created_at": project.created_at.isoformat(),
                }
                for project in projects
            ]
            return JsonResponse(data, safe=False)
    
    elif request.method == "POST":
        try:
            data = json.loads(request.body)
            project = Project.objects.create(
                title=data.get("title", ""),
                description=data.get("description", ""),
                github=data.get("github", ""),
                live_demo=data.get("live_demo", ""),
                technologies=data.get("technologies", ""),
                featured=data.get("featured", False),
            )
            return JsonResponse({"success": True, "id": project.id})
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    
    elif request.method == "PUT":
        try:
            data = json.loads(request.body)
            project = Project.objects.get(id=project_id)
            project.title = data.get("title", project.title)
            project.description = data.get("description", project.description)
            project.github = data.get("github", project.github)
            project.live_demo = data.get("live_demo", project.live_demo)
            project.technologies = data.get("technologies", project.technologies)
            project.featured = data.get("featured", project.featured)
            if "image" in data:
                project.image = data["image"]
            project.save()
            return JsonResponse({"success": True, "id": project.id})
        except Project.DoesNotExist:
            return JsonResponse({"error": "Project not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
    
    elif request.method == "DELETE":
        try:
            project = Project.objects.get(id=project_id)
            project.delete()
            return JsonResponse({"success": True})
        except Project.DoesNotExist:
            return JsonResponse({"error": "Project not found"}, status=404)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=400)
