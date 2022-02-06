import React, { useState, useEffect } from "react"
import sender from "helper/sender"
import { GitHubConfig as config } from "config/account"

const API_URL = "https://api.github.com"

export default function useGitHub() {
  const [user, setUser] = useState()
  const [events, setEvents] = useState()

  const getUserInfo = () => {
    const url = `${API_URL}/users/${config.username}`
    sender.send({
      url,
      onSuccess: (data) => {
        setUser(data)
      },
    })
  }

  const getUserEvents = () => {
    const url = `${API_URL}/users/${config.username}/events`
    sender.send({
      url,
      onSuccess: (data) => {
        setEvents(data)
      },
    })
  }

  useEffect(() => {
    getUserInfo()
    getUserEvents()
  }, [])

  return {
    userInfo: user,
    eventInfo: events,
    config,
  }
}
