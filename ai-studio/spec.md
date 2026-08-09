---
AI Studio API Spec

Endpoints:
- POST /api/ai/studio
  - body: { "land_id": "QSM-0001", "scenario": "eco_lodge", "params": { "budget": 1000000, "units": 10 } }
  - returns: { "job_id": "uuid", "status": "queued" }

- GET /api/ai/studio/:job_id
  - returns: { "job_id": "uuid", "status": "completed", "outputs": { "gltf_url": "https://.../model.glb", "concept_images": ["https://.../1.jpg"], "estimates": { "cost": 1200000, "duration_months": 14, "units": 12 } } }

Notes:
- Outputs must include disclaimers: no guaranteed ROI.
- glTF files should be hosted on cloud storage with signed URLs.

Sample job output (placeholder):
{
  "job_id": "sample-job-001",
  "status": "completed",
  "outputs": {
    "gltf_url": "https://cdn.example.com/models/QSM-0001-sample.glb",
    "concept_images": ["https://cdn.example.com/images/QSM-0001-1.jpg"],
    "estimates": { "cost": 1200000, "duration_months": 14, "units": 8 }
  }
}
