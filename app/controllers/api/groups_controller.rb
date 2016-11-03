class Api::GroupsController < ApplicationController

  def create
    @group = Group.new(group_params)
    @group.housemate_ids = params["group"]["housemate_ids"].map(&:to_i)
    if @group.save
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def show
    @group = Group.find_by(params[:id])
  end

  private
  def group_params
    params.require(:group).permit(:title, :creator_id, :housemate_ids)
  end

end
