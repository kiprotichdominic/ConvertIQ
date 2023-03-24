from django.http import HttpResponseForbidden

def user_has_permission(role):
    def decorator(view_func):
        def wrapper(request, *args, **kwargs):
            if not request.user.is_authenticated:
                return HttpResponseForbidden()

            if request.user.role != role:
                return HttpResponseForbidden()

            return view_func(request, *args, **kwargs)
        return wrapper
    return decorator