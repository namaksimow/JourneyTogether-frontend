import { Button, Layout, Space, Typography, theme } from 'antd'

interface AppHeaderProps {
  centerTitle: string
  centerSubtitle?: string
  actionLabel?: string
}

const { Header } = Layout

export function AppHeader({ centerTitle, centerSubtitle, actionLabel }: AppHeaderProps) {
  const { token } = theme.useToken()

  return (
    <Header
      style={{
        background: token.colorPrimary,
        borderBottomLeftRadius: token.borderRadiusLG,
        borderBottomRightRadius: token.borderRadiusLG,
        paddingInline: token.paddingLG,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
          gap: token.padding,
        }}
      >
        <Typography.Title level={4} style={{ color: token.colorTextLightSolid, margin: 0, minWidth: 220 }}>
          JourneyTogether
        </Typography.Title>

        <div style={{ flex: 1, textAlign: 'center' }}>
          <Typography.Text
            style={{
              color: token.colorTextLightSolid,
              display: 'block',
              fontSize: token.fontSizeLG,
              fontWeight: 700,
              lineHeight: token.lineHeight,
            }}
          >
            {centerTitle}
          </Typography.Text>

          {centerSubtitle ? (
            <Typography.Text style={{ color: token.colorTextLightSolid }}>{centerSubtitle}</Typography.Text>
          ) : null}
        </div>

        <Space size={token.paddingSM}>
          {actionLabel ? (
            <Button type="primary" ghost>
              {actionLabel}
            </Button>
          ) : null}
          <Button type="text" style={{ color: token.colorTextLightSolid }}>
            Профиль
          </Button>
        </Space>
      </div>
    </Header>
  )
}
