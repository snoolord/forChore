class Api::ChoresController < ApplicationController
  def create
    chore_param = chore_params
    chore_param["user_id"] = chore_params["user_id"].to_i
    chore_param["group_id"] = chore_params["group_id"].to_i
    @chore = Chore.new(chore_param)
    @chore.reminders = 0
    p @chore
    if @chore.save
      render :show
    else
      p @chore.errors.full_messages
      render json: @chore.errors.full_messages
    end
  end


  private
  def chore_params
    params.require(:chore).permit(:user_id, :group_id, :complete_by, :task)
  end
end
