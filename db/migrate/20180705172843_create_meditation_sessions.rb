class CreateMeditationSessions < ActiveRecord::Migration[5.1]
  def change
    create_table :meditation_sessions do |t|
      t.integer :duration
      t.integer :user_id

      t.timestamps
    end
  end
end
