from modeltranslation.translator import register, TranslationOptions
from .models import Post, Faq


@register(Post)
class PostTranslationOptions(TranslationOptions):
    fields = ('title', 'text')

@register(Faq)
class FaqTranslationOptions(TranslationOptions):
    fields = ('title', 'question')