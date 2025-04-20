import gradio as gr
from data import get_training_plan
from utils import render_schedule, mark_session_complete

training_data = get_training_plan()

def show_plan(week):
    schedule_html = render_schedule(training_data, week)
    return schedule_html

def complete_session(week, session_index):
    mark_session_complete(training_data, week, session_index)
    return render_schedule(training_data, week)

with gr.Blocks(css="body {font-family: Inter, sans-serif;}") as demo:
    gr.Markdown("# 🏊‍♀️ Emma's Ironman 70.3 Training Plan")
    
    week_slider = gr.Slider(1, 20, step=1, label="Select Week")
    plan_output = gr.HTML()

    complete_input = gr.Number(label="Session # to mark complete")
    complete_button = gr.Button("Mark Session Complete")

    week_slider.change(show_plan, inputs=week_slider, outputs=plan_output)
    complete_button.click(fn=complete_session, inputs=[week_slider, 
complete_input], outputs=plan_output)

    gr.Markdown("✅ Track your progress each week!")

demo.launch()

