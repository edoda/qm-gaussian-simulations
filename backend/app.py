from flask import Flask, request, jsonify
from simulations.rectangular_well import RectangularWell
from simulations.parabolic_barrier import ParabolicBarrier
from simulations.rectangular_barrier import RectangularBarrier
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:8081", "http://127.0.0.1:8081" ]}}, supports_credentials=True)

@app.route('/api/simulate', methods=['POST'])
def simulate():
    data = request.json
    sim_type = data['simulation_type']
    steps = data.get('steps', 300)
    if sim_type == 'rectangular_well':
        sim = RectangularWell()
        return jsonify(sim.run(data['well_width'], data['well_depth'], steps))
    elif sim_type == 'parabolic_barrier':
        sim = ParabolicBarrier()
        return jsonify(sim.run(data['barrier_coefficient'], steps))
    elif sim_type == 'rectangular_barrier':
        sim = RectangularBarrier()
        return jsonify(sim.run(data['barrier_width'], data['barrier_height'], steps))
    return jsonify({"error": "Invalid simulation type"}), 400

if __name__ == '__main__':
    app.run(port=5000, debug=True)