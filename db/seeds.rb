# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'Wiping Old Data'
User.destroy_all
ClimbingDrill.destroy_all
Climb.destroy_all
ProjectList.destroy_all
ProjectPlan.destroy_all
Project.destroy_all
Resource.destroy_all
WorkoutExercise.destroy_all
WorkoutPlan.destroy_all
WorkoutSession.destroy_all


puts "🌱 Seeding users..."
u1 = User.create(username: 'Dan', email: 'Dan@email.com', password: 'dan1', password_confirmation: 'dan1')

puts "🌱 Seeding Climb Drills..."
cd1 = ClimbingDrill.create({name: '4x4', climb_type: "Boulder", grade: "v4-v5", climb_attributes: "no slab or roofs", reps: 4, sets: 4, notes: "Pick 4 different climbs. Climb each in a row. This is one set. 4 min of rest in between sets"}) 
cd2 = ClimbingDrill.create({name: 'Floor is Lava', climb_type: "Ropes or system board", grade: "5.10a- 5.10b", duration: 7.00, reps: 1, sets: 3, notes: "must not touch the ground for the full duration. Rest 7 min between sets."})

puts "🌱 Seeding Climbs..."
c1 = Climb.create({name: 'Casual Route', location: "RMNP", grade: "5.10a", climb_type: "trad", climb_attribute: "alpine"}) 
c2 = Climb.create({name: 'The Flying Buttess', location: "RMNP", grade: "5.10", climb_type: "trad"}) 
c3 = Climb.create({name: 'Pigpen', location: "Joshua Tree", grade: "v4", climb_type: "boulder", climb_attribute: "crimpy"}) 
c4 = Climb.create({name: 'JBMFP', location: "Joshua Tree", grade: "v5", climb_type: "boulder"}) 

puts "🌱 Seeding Project Lists..."
pl1 = ProjectList.create({user_id: u1.id, name: 'RMNP Trab', description: "All my trad climbs in RMNP"}) 
pl2 = ProjectList.create({user_id: u1.id, name: 'Joshua Tree', description: "Projects in J-Tree", location: "Joshua Tree", grade: "v4-v5", climb_type: "boulders"}) 

puts "🌱 Seeding Projects..."
p1 = Project.create({climb_id: c1.id, project_list_id: pl1.id, beta: "get there early! Take breaks on the hike in"}) 
p2 = Project.create({climb_id: c2.id, project_list_id: pl1.id}) 
p3 = Project.create({climb_id: c3.id, project_list_id: pl2.id, beta: "big 1st move. Throw for the crimp"}) 
p4 = Project.create({climb_id: c4.id, project_list_id: pl2.id}) 

puts "🌱 Seeding Resources..."
r1 = Resource.create({project_id: p1.id, site_url: "https://www.mountainproject.com/route/105748496/casual-route"})
r2 = Resource.create({project_id: p4.id, site_url: "https://www.mountainproject.com/route/105725464/jbmfp"})
r3 = Resource.create({project_id: p4.id, site_url: "https://www.youtube.com/watch?v=NO34V2UE_Kw"})

puts "🌱 Seeding Workout Exercises..."
we1 = WorkoutExercise.create({name: 'Squat', weight: 165, reps: 5, sets: 4}) 
we2 = WorkoutExercise.create({name: 'Squat Jump', duration: 0.30, sets: 4, notes: "Focus on form!"}) 
we3 = WorkoutExercise.create({name: 'rest', duration: 1, sets: 4}) 
we4 = WorkoutExercise.create({name: 'pull-ups', reps: 10, sets: 3, notes: "Super set with bent over row. Go slow, engage back before moving" }) 
we5 = WorkoutExercise.create({name: 'bent over row', weight: 40, reps: 10, sets: 3, notes: "Super set with pull-ups"}) 

puts "🌱 Seeding Workout Plans..."
wp1 = WorkoutPlan.create({user_id: u1.id, name: 'Leg Day', Description: "endurance for leges", Focus: "endurance"}) 
wp2 = WorkoutPlan.create({user_id: u1.id, name: 'Back', Description: "Max strenght for the back", Focus: "max strength"}) 

# puts "🌱 Seeding Workout Sessions..."
# wp1 = WorkoutSession.create({name: "Day 1" description: "Mix of weights and climbing", , description: "endurance for leges", focus: "endurance" }) 

puts "🌱 Seeding Project Plans..."
pp1 = ProjectPlan.create({project_id: p1.id, workout_plan_id: wp1.id}) 
pp2 = ProjectPlan.create({project_id: p1.id, workout_plan_id: wp2.id}) 

puts "✅ Done seeding!"