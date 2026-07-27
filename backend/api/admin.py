from django.contrib import admin
from .models import Project, About, Contact, CV, Education, Experience, Skill, Message

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "technologies",
        "featured",
        "created_at",
    )
    list_filter = ("featured",)
    search_fields = ("title", "technologies")

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ("name", "title", "updated_at")
    search_fields = ("name", "title")

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("email", "phone", "location", "updated_at")
    search_fields = ("email", "phone")

class EducationInline(admin.TabularInline):
    model = Education
    extra = 1

class ExperienceInline(admin.TabularInline):
    model = Experience
    extra = 1

class SkillInline(admin.TabularInline):
    model = Skill
    extra = 1

@admin.register(CV)
class CVAdmin(admin.ModelAdmin):
    list_display = ("name", "title", "email", "updated_at")
    search_fields = ("name", "title", "email")
    inlines = [EducationInline, ExperienceInline, SkillInline]

@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "subject", "created_at", "is_read")
    list_filter = ("is_read", "created_at")
    search_fields = ("name", "email", "subject")
    readonly_fields = ("created_at",)