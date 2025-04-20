def render_schedule(plan, week):
    sessions = plan.get(week, [])
    if not sessions:
        return "<p>No sessions found for this week.</p>"

    table = 
"<table><tr><th>#</th><th>Type</th><th>Duration</th><th>Intensity</th><th>Status</th></tr>"
    for i, session in enumerate(sessions):
        status = "✅" if session["done"] else "⬜️"
        table += 
f"<tr><td>{i}</td><td>{session['type']}</td><td>{session['duration']}</td><td>{session['intensity']}</td><td>{status}</td></tr>"
    table += "</table>"
    return table

def mark_session_complete(plan, week, index):
    try:
        plan[week][int(index)]["done"] = True
    except (IndexError, ValueError, KeyError):
        pass

